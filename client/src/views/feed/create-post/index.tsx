import React from 'react';
import { ContentType } from '@danielfamiyeh/chamber-common';

import ContentInput from './components/content-input/ContentInput';
import ContentSelect from './components/content-select/ContentSelect';

import { serverRequest } from '../../../utils/methods/network';

const CreatePost = ({ navigation: { navigate } }) => {
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
    ).then((res) => console.log({ res }));
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
