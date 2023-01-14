import { useQuery } from 'react-query';
import { serverRequest } from '../methods/network';

export const useUser = () => {
  const { data, isLoading } = useQuery('user', () =>
    serverRequest('user/post', {}, true)
  );

  return { user: data, isLoadingUserData: isLoading };
};
