import React from 'react';
import { Alert } from 'react-native';
import { useQueryClient } from 'react-query';
import { ContentType } from '@danielfamiyeh/chamber-common';

import ContentInput from './components/content-input/ContentInput';
import ContentSelect from './components/content-select/ContentSelect';

import { serverRequest } from '../../../utils/methods/network';
import { toast } from '../../../utils/methods/toast';

const CreatePost = ({ navigation: { navigate } }) => {
  const queryClient = useQueryClient();
  const [contentType, setContentType] = React.useState<ContentType>();
  const onSubmit = ({ current: contentValue }: { current: string }) => {
    serverRequest(
      'feed/put?subpath=post',
      {
        body: JSON.stringify({
          contentType,
          contentValue,
        }),
      },
      true
    )
      .then((res) => {
        if (res.error) {
          throw new Error(res.error);
        }

        queryClient.invalidateQueries('feed').then(() => {
          toast.success('Success', 'Post uploaded');
          navigate('Feed');
        });
      })
      .catch((error) => Alert.alert('An error occurred', error.message));
  };

  return contentType ? (
    <ContentInput
      contentType={contentType}
      setContentType={setContentType}
      onSubmit={onSubmit}
    />
  ) : (
    <ContentSelect setContentType={setContentType} />
  );
};

export default CreatePost;
