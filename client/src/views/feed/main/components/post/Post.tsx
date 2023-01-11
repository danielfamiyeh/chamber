import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Content, Post as IPost, User } from '@danielfamiyeh/chamber-common';

import styles from './Post.styles';
import { renderContent } from '../../../../../components/display/content/Content';

const Post = (props: PostProps) => {
  return (
    <View style={styles.container}>
      <Text>{props.createdBy.username}</Text>
      <Text>{props.createdAt.toString()}</Text>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item: { type, value } }) => renderContent(type, value)}
        data={props.content}
      />
    </View>
  );
};

interface PostProps {
  _id: string;
  content: Content<IPost>[];
  createdAt: Date;
  createdBy: Pick<User, '_id' | 'username'>;
}

export default Post;
