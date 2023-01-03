import { Session, User } from '../../../../../types';
import { toast } from '../../../../utils/methods/toast';
import { serverRequest } from '../../../../utils/methods/network';

export const signIn = async (
  username: string
): Promise<{ user: User; session: Session } | void> => {
  if (!username) {
    return Promise.resolve(
      toast.error('', 'Username field cannot be left blank')
    );
  }

  const { user, session, error } = await serverRequest<{
    user: User;
    session: Session;
    error: { message: string };
  }>('user', {
    method: 'PUT',
    body: JSON.stringify({ username }),
  });

  error && toast.error('', error.message);
  user && toast.success('Account created', 'Please wait...');

  return { user, session };
};

export const signOut = () => {
  //
};
