export const onSendMessage = (_id: string, navigate: Function) => () =>
  navigate('Create Chat', { _id });
