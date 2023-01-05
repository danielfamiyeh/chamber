import { Response } from 'express';

import { models } from '../../models';
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
  const { userId, chatId } = req.body;

  const chat = await models.Chat.findOne({ _id: chatId })
    .populate('recipients')
    .populate('messages');

  if (chat.recipients.find(({ _id }) => _id.toString() === userId)) {
    return res.json({ chat });
  }

  throw new Error('You are not a recipient of this chat');
};
