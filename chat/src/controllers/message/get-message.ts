import { Response } from 'express';
import { Message, User } from '@danielfamiyeh/chamber-common';
import { models } from '@danielfamiyeh/chamber-common/dist/models';

import { GetMessageRequest } from '../../../types';

export const getMessage = async (req: GetMessageRequest, res: Response) => {
  const { _id, chatId, skip = 0, limit = 20 } = req.body;

  const chat = await models.Chat.findOne({ _id: chatId });

  if (!chat) throw new Error('Chat not found');
  if (!chat.recipients.map((id: object) => id.toString()).includes(_id)) {
    throw new Error('You are not a recipient of this chat');
  }

  const messages = await models.Message.find({ chat: chatId })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .populate([
      {
        path: 'sender',
        model: 'user',
        select: '_id username',
      },
      {
        path: 'content',
      },
      {
        path: 'readReceipts',
        populate: {
          path: 'readBy',
          model: 'user',
          select: '_id username',
        },
      },
    ]);

  return res.json({
    messages: messages.map(({ _doc }) => ({
      ..._doc,
      isOwn: _doc.sender._id.toString() === _id,
    })),
  });
};
