import React from 'react';
import { ContentType } from '@danielfamiyeh/chamber-common';

import ContentSelect from './components/content-select/ContentSelect';

import ContentInput from './components/content-input/ContentInput';

const CreatePost = ({ navigation: { navigate } }) => {
  const [contentValue, setContentValue] = React.useState('');
  const [contentType, setContentType] = React.useState<ContentType>();

  return contentType ? (
    <ContentInput
      contentType={contentType}
      setContentType={setContentType}
      contentValue={contentValue}
      setContentValue={setContentValue}
    />
  ) : (
    <ContentSelect setContentType={setContentType} />
  );
};

export default CreatePost;
