import { Response } from 'express';
import { models } from '@danielfamiyeh/chamber-common/dist/models';

import { GetChatRequest } from '../../../types';

/**
 * Get chat by ID, only if user is a recipient

 * @param {GetChatRequest} req Client request object
 * @param {Response} res Server response object
 * @returns {Response}
 */
export const getChat = async (
  req: GetChatRequest,
  res: Response
): Promise<Response> => {
  const { _id, chatId } = req.body;

  if (chatId) {
    const chat = await models.Chat.findOne({ _id: chatId })
      .populate('recipients')
      .populate('messages');

    if (
      chat.recipients.find(
        ({ _id: recipientId }) => recipientId.toString() === _id
      )
    ) {
      return res.json({ chats: [chat] });
    }
  } else {
    const chats = await models.Chat.find({
      recipients: { $elemMatch: { $eq: _id } },
    }).populate([
      { path: 'admins', model: 'user', select: '_id username' },
      { path: 'createdBy', model: 'user', select: '_id username' },
      { path: 'recipients', model: 'user', select: '_id username' },
      { path: 'messages', model: 'message' },
    ]);

    return res.json({ chats });
  }

  throw new Error('You are not a recipient of this chat');
};
