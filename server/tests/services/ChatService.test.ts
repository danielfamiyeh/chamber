import assert from 'assert';
import { describe } from 'mocha';

import { clearStores, users, chats } from '../../src/store';
import { UserService } from '../../src/services/user/UserService';
import { FriendService } from '../../src/services/friend/FriendService';
import { ChatService } from '../../src/services/chat/ChatService';

describe('Chat service suite', () => {
  beforeEach(() => {
    UserService.createUser('user1');
    UserService.createUser('user2');

    FriendService.addFriend('user1', 'user2');
    FriendService.acceptRequest('user1', 'user2');
  });

  it('should create a chat between user1 and user2', () => {
    const { id } = ChatService.createChat('user1', 'user2');
    const [chatId1] = users.user1.chatIds;
    const [chatId2] = users.user2.chatIds;

    assert.strictEqual(id, chatId1);
    assert.strictEqual(id, chatId2);
  });

  it('should send a message between user1 and user2', () => {
    const { id: chatId } = ChatService.createChat('user1', 'user2');
    const message = ChatService.sendMessage(chatId, 'user1', 'Hey from user1');
    const [storedMessage] = chats[chatId].messages;

    assert.strictEqual(message, storedMessage);
  });

  afterEach(clearStores);
});
