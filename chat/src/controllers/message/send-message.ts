import { Response } from 'express';
import { models } from '@danielfamiyeh/chamber-common';

import { SendMessageRequest } from '../../../types';

export const sendMessage = async (req: SendMessageRequest, res: Response) => {
  const { chatId, userId, contentType, contentValue } = req.body;

  const chat = await models.Chat.findOne({ _id: chatId });

  if (!chat?.recipients?.map((id) => id.toString())?.includes(userId)) {
    throw new Error('You are not a recipient of this chat');
  }

  const message = await models.Message.create({
    user: userId,
    chat: chatId,
    content: {
      type: contentType,
      value: contentValue,
    },
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
