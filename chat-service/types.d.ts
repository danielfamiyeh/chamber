import { Request } from 'express';

export interface SendMessageRequest extends Request {
  body: {
    contentValue: string;
    contentType: string;
    userId: string;
    chatId: string;
  };
}

export interface GetMessageRequest extends Request {
  body: {
    chatId: string;
    userId: string;
    start?: number;
    end?: number;
  };
}

export interface CreateChatRequest extends Request {
  body: {
    userId: string;
    recipients: string[];
    initialMessage?: string;
  };
}

export interface GetChatRequest extends Request {
  body: {
    userId: string;
    chatId: string;
  };
}
