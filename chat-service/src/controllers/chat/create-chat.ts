import { Response } from 'express';

import { models } from '../../models';
import { CreateChatRequest, Message } from '../../../types';

/**
 * Create a chat
 *
 * @param {CreateChatRequest} req Client request object
 * @param {Response} res Server response object
 * @returns {Promise<Response>}
 */
export const createChat = async (
  req: CreateChatRequest,
  res: Response
): Promise<Response> => {
  const { userId, recipients, initialMessage } = req.body;

  const creator = await models.User.findOne({ userId });

  recipients.forEach((recipientId) => {
    if (!creator.friends.includes(recipientId)) {
      throw new Error(
        'Cannot create chat with someone you are not friends with'
      );
    }
  });

  const chat = await models.Chat.create({
    recipients: [...userId, ...recipients],
  });

  if (initialMessage) {
    const _initialMessage = await models.Message.create({
      chat: chat._id,
      content: {
        type: 'text',
        value: initialMessage.toString(),
      },
    });

    await models.Chat.findOneAndUpdate(
      {
        _id: chat._id,
      },
      {
        $push: {
          messages: _initialMessage._id,
        },
      }
    );

    chat.messages.push(<any>_initialMessage);
  }

  return res.json({ chat });
};
