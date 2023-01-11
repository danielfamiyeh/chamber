import React from 'react';
import moment from 'moment';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Content, Post as IPost, User } from '@danielfamiyeh/chamber-common';

import { renderContent } from '../../../../../components/display/content/Content';
import Button from '../../../../../components/input/button/Button';

import styles, { iconSize } from './Post.styles';

const Post = (props: PostProps) => {
  const onLike = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.metaContainer}>
        <Text style={styles.username}>@{props.createdBy.username}</Text>

        <Text style={styles.createdAt}>
          {' '}
          at {moment(props.createdAt).format('DD/MM/YYYY, hh:mm a')}
        </Text>
      </View>
      <View style={styles.divider} />
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.contentSeparator} />}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item: { type, value } }) => renderContent(type, value)}
        data={props.content}
      />
      <View style={styles.ctaContainer}>
        <View style={styles.ctaLeft}>
          <Button style={styles.ctaButton} onPress={onLike}>
            <Icon name="heart" size={iconSize} />
          </Button>
        </View>

        <View style={styles.ctaRight}>
          <Button
            style={styles.ctaButton}
            onPress={() => props.navigate('Comments', { postId: props._id })}
          >
            <Icon name="speech" size={iconSize} />
          </Button>
        </View>
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

export default Post;
