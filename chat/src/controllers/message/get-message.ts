import { Response } from 'express';
import { models } from '@danielfamiyeh/chamber-common/dist/models';

import { GetMessageRequest } from '../../../types';

export const getMessage = async (req: GetMessageRequest, res: Response) => {
  const { _id, chatId, start = 0, end = 20 } = req.body;

  const chat = await models.Chat.findOne({ _id: chatId }).populate('messages');

  if (!chat) throw new Error('Chat not found');
  if (!chat.recipients.map((id) => id.toString()).includes(_id)) {
    throw new Error('You are not a recipient of this chat');
  }

  const messages = chat.messages.slice(start, end);

  return res.json({ messages });
};
