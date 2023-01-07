import { Response } from 'express';
import { models } from '@danielfamiyeh/chamber-common';

import { CreateChatRequest } from '../../../types';

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
    if (
      !creator.friends
        .map((friendId) => friendId.toString())
        .includes(recipientId)
    ) {
      throw new Error(
        'Cannot create chat with someone you are not friends with'
      );
    }
  });

  const chat = await models.Chat.create({
    recipients: [...userId, ...recipients],
    createdBy: userId,
    admins: [userId],
  });

  if (initialMessage) {
    const _initialMessage = await models.Message.create({
      user: userId,
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