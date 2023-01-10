import { Post } from '@danielfamiyeh/chamber-common';

import { testContent } from './content';
import { testUser } from './user';

export const testPost: Post = {
  _id: 'post1',
  content: [testContent],
  createdBy: testUser,
  createdAt: new Date(),
};
