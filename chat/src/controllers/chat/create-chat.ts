import { Response } from 'express';
import { models } from '@danielfamiyeh/chamber-common/dist/models';

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
  const { _id, recipients, initialMessage } = req.body;

  const creator = await models.User.findOne({ _id }).populate([
    {
      path: 'relations',
      model: 'relation',
      populate: { path: 'user', model: 'user', select: '_id username' },
    },
  ]);

  recipients.forEach((recipientId) => {
    if (
      !creator.relations
        .map(({ user }) => user._id.toString())
        .includes(recipientId)
    ) {
      throw new Error(
        'Cannot create chat with someone you are not friends with'
      );
    }
  });

  const chat = await models.Chat.create({
    recipients: [_id, ...recipients],
    createdBy: _id,
    admins: [_id],
  });

  await models.User.update(
    { _id: { $in: [_id, ...recipients] } },
    {
      $push: {
        chats: chat._id,
      },
    }
  );

  if (initialMessage) {
    const _initialMessage = await models.Message.create({
      user: _id,
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
