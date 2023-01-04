import { Response } from 'express';

import { getCurrentUser } from '../utils/auth';
import { FriendService } from '../services/friend/FriendService';
import { AddFriendRequest, AcceptFriendRequest } from '../../types';

export const addFriend = async (req: AddFriendRequest, res: Response) => {
  try {
    const { username } = await getCurrentUser(req, res);
    FriendService.addFriend(username, req.body.username);

    return res.json({ success: true });
  } catch (error) {
    return res.json({ error: error.message });
  }
};

export const acceptFriendRequest = async (
  req: AcceptFriendRequest,
  res: Response
) => {
  try {
    const { username } = await getCurrentUser(req, res);
    const { request } = req.body;
  } catch (error) {
    return res.json({ error: error.message });
  }
};
