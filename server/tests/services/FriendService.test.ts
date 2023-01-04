import assert from 'assert';
import { describe } from 'mocha';

import { clearStores, users } from '../../src/store';
import { UserService } from '../../src/services/user/UserService';
import { FriendService } from '../../src/services/friend/FriendService';

describe('Friend service suite', () => {
  beforeEach(() => {
    UserService.createUser('user1');
    UserService.createUser('user2');
  });

  it('should send a friend request from user1 to user2', () => {
    FriendService.addFriend('user1', 'user2');
    const [outgoing] = users.user1.outgoingFriendRequests;
    const [incoming] = users.user2.incomingFriendRequests;

    assert.strictEqual('user2', outgoing.to);
    assert.strictEqual('user1', incoming.from);
    assert.throws(() => FriendService.addFriend('user1', 'user2'));
  });

  it('should accept a friend request sent from user1 to user2', () => {
    FriendService.addFriend('user1', 'user2');
    FriendService.acceptRequest('user1', 'user2');

    assert.strictEqual(true, users.user1.friends.includes('user2'));
    assert.strictEqual(true, users.user2.friends.includes('user1'));
    assert.strictEqual(
      false,
      !!users.user1.outgoingFriendRequests.find(({ to }) => to === 'user2')
    );
    assert.strictEqual(
      false,
      !!users.user2.incomingFriendRequests.find(({ from }) => from === 'user1')
    );
    assert.throws(() => FriendService.acceptRequest('user1', 'user2'));
    assert.throws(() => FriendService.acceptRequest('user2', 'user1'));
  });

  it('should reject a friend request sent from user1 to user2', () => {
    FriendService.addFriend('user1', 'user2');
    FriendService.rejectRequest('user1', 'user2');

    assert.strictEqual(false, users.user1.friends.includes('user2'));
    assert.strictEqual(false, users.user2.friends.includes('user1'));

    assert.strictEqual(
      false,
      !!users.user1.outgoingFriendRequests.find(({ to }) => to === 'user2')
    );
    assert.strictEqual(
      false,
      !!users.user2.incomingFriendRequests.find(({ from }) => from === 'user1')
    );

    assert.throws(() => FriendService.rejectRequest('user1', 'user2'));
    assert.throws(() => FriendService.rejectRequest('user2', 'user1'));
  });

  afterEach(clearStores);
});
