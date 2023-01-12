import React from 'react';
import { ContentType } from '@danielfamiyeh/chamber-common';

import ContentSelect from './components/content-select/ContentSelect';

import ContentInput from './components/content-input/ContentInput';

const CreatePost = ({ navigation: { navigate } }) => {
  const [contentType, setContentType] = React.useState<ContentType>();
  const onSubmit = ({ current: contentValue }) => console.log({ contentValue });

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
