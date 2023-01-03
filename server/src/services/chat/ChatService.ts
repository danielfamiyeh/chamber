import { Request, Response } from 'express';

import { userServiceStore as users } from '../user/UserService.store';
import { chatServiceStore as chats } from './ChatService.store';
import { assertExists } from '../../utils/assert';
import { Chat, Message } from '../../../types';
import { ChatSchema } from '../../models/chat';
import { MessageSchema } from '../../models';

export class ChatService {
  static clients: Record<string, { req: Request; res: Response }> = {};

  static createChat(username1: string, username2: string): Chat {
    const [user1, user2] = [users[username1], users[username2]];

    assertExists({ user1 }) && assertExists({ user2 });

    const [existingChatId] = user1.chatIds.filter(
      (chatId) =>
        chats[chatId] && !!user2.chatIds.find((_chatId) => chatId === _chatId)
    );

    if (existingChatId) return chats[existingChatId];

    const chat = { ...ChatSchema.model, user1: username1, user2: username2 };

    user1.chatIds.push(chat.id);
    user2.chatIds.push(chat.id);

    return (chats[chat.id] = chat);
  }

  static sendMessage(
    chatId: string,
    senderName: string,
    content: string
  ): Message {
    const [sender, chat] = [users[senderName], chats[chatId]];

    assertExists({ sender }) && assertExists({ chat });

    const isUser1 = chat.user1 === senderName;
    const recipient = users[chat[isUser1 ? 'user2' : 'user1']];
    const recipientClient = ChatService.clients[recipient.username];

    const message = {
      ...MessageSchema.model,
      content,
      sender: senderName,
      chatId,
    };

    recipientClient?.res?.write(JSON.stringify(message));
    chat.messages.push(message);

    return message;
  }

  static getMessages(chatId: string, startIdx = 0, endIdx = 20): Message[] {
    return (chats[chatId]?.messages ?? []).slice(startIdx, endIdx);
  }
}
