import { ConversationMap } from '../../types';

export default class SSEChatService {
  constructor(private conversations: ConversationMap = {}) {}
}
