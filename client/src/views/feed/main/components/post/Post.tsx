import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Content, Post as IPost, User } from '@danielfamiyeh/chamber-common';

import { renderContent } from '../../../../../components/display/content/Content';

import styles, { getComputedStyles } from './Post.styles';

const dateFormatOptions = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

const Post = (props: PostProps) => {
  const [state, setState] = React.useState<PostState>({
    isLikeButtonPressed: false,
    isCommentButtonPressed: false,
  });

  const computedStyles = getComputedStyles(props, state);
  return (
    <View style={styles.container}>
      <View style={styles.metaContainer}>
        <Text style={styles.username}>@{props.createdBy.username}</Text>

        <Text style={styles.createdAt}>
          {' '}
          at{' '}
          {new Intl.DateTimeFormat('en-GB', dateFormatOptions).format(
            props.createdAt
          )}
        </Text>
      </View>
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.contentSeparator} />}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item: { type, value } }) => renderContent(type, value)}
        data={props.content}
      />
      <View style={styles.ctaContainer}>
        <Pressable
          style={{ ...styles.ctaButton, ...computedStyles.likeButton }}
          onPressOut={() =>
            setState((_state) => ({ ..._state, isLikeButtonPressed: false }))
          }
          onPressIn={() =>
            setState((_state) => ({ ..._state, isLikeButtonPressed: true }))
          }
        >
          <Icon name="heart" size={24} />
        </Pressable>

        <Pressable
          style={{ ...styles.ctaButton, ...computedStyles.commentButton }}
          onPressOut={() =>
            setState((_state) => ({ ..._state, isCommentButtonPressed: false }))
          }
          onPressIn={() =>
            setState((_state) => ({ ..._state, isCommentButtonPressed: true }))
          }
          onPress={() => props.navigate('Comments', { postId: props._id })}
        >
          <Icon name="speech" size={24} />
        </Pressable>
      </View>
    </View>
  );
};

export interface PostProps {
  _id: string;
  content: Content<IPost>[];
  createdAt: Date;
  createdBy: Pick<User, '_id' | 'username'>;
  navigate: Function;
}

export interface PostState {
  isLikeButtonPressed: boolean;
  isCommentButtonPressed: boolean;
}

export default Post;
