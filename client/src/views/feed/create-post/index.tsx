import React from 'react';
import { Content, ContentType, Post } from '@danielfamiyeh/chamber-common';

import ContentSelect from './components/content-select/ContentSelect';

const CreatePost = ({ navigation: { navigate } }) => {
  const [contentValue, setContentValue] = React.useState('');
  const [contentType, setContentType] = React.useState<ContentType>();

  return contentType ? (
    <></>
  ) : (
    <ContentSelect setContentType={setContentType} />
  );
};

export default CreatePost;
