import assert from 'assert';
import { describe } from 'mocha';
import { UserService } from '../../src/services/user/UserService';
import { clearStores, users } from '../../src/store';

describe('User service suite', () => {
  it('should create a user', () => {
    assert.strictEqual(false, !!users.user1);
    UserService.createUser('user1');
    assert.strictEqual(!!users, true);
    clearStores();
  });
});
