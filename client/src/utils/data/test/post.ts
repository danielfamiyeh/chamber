import { Post } from '@danielfamiyeh/chamber-common';

import { testTextContent, testImageContent } from './content';
import { testUser } from './user';

export const testPost: Post = {
  _id: 'post1',
  content: [testTextContent, testImageContent],
  createdBy: testUser,
  createdAt: new Date(),
};
