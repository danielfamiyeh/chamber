import { Response } from 'express';
import { models } from '@danielfamiyeh/chamber-common/dist/models';

import { SendMessageRequest } from '../../../types';

export const sendMessage = async (req: SendMessageRequest, res: Response) => {
  const { chatId, _id, contentType, contentValue } = req.body;

  const chat = await models.Chat.findOne({ _id: chatId });

  if (!chat?.recipients?.map((id: object) => id.toString())?.includes(_id)) {
    throw new Error('You are not a recipient of this chat');
  }

  const readReceipts = [
    {
      readBy: _id,
      chat: chatId,
      createdAt: new Date(),
    },
  ];

  const message = await models.Message.create({
    user: _id,
    chat: chatId,
    content: {
      type: contentType,
      value: contentValue,
    },
    readReceipts,
  });

  await models.Chat.findOneAndUpdate(
    {
      _id: chatId,
    },
    {
      $push: {
        messages: message._id,
      },
    }
  );
  return res.json({ message });
};
