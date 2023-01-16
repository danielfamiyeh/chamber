export const onSendMessage = (_id: string, navigate: Function) => () =>
  navigate('Chat', { _id });

export const onNavigateProfile = (_id: string, navigate: Function) => () =>
  navigate('Profile', { _id });
