import { Response } from 'express';

import { CreateSSERequest } from '../../types';
import { ChatService } from '../services/chat/ChatService';

export const sendMessage = async (req: CreateSSERequest, res: Response) => {
  const { chatId, sender, content } = req.body;

  try {
    ChatService.sendMessage(chatId, sender, content);
    return res.json({ success: true });
  } catch (error) {
    return res.json({ error: error.message });
  }
};
