import { Request } from 'express';

export interface SendMessageRequest extends Request {
  body: {
    contentValue: string;
    contentType: string;
    _id: string;
    chatId: string;
  };
}

export interface GetMessageRequest extends Request {
  body: {
    chatId: string;
    _id: string;
    start?: number;
    end?: number;
  };
}

export interface CreateChatRequest extends Request {
  body: {
    _id: string;
    recipients: string[];
    initialMessage?: string;
  };
}

export interface GetChatRequest extends Request {
  body: {
    _id: string;
    chatId: string;
  };
}
