import { Alert } from 'react-native';
import { serverRequest } from '../../../utils/methods/network';

export const searchUsers = async (
  searchTerm: string,
  skip: number,
  limit: number,
  setResults: Function,
  setNumTotalRecords: Function
) => {
  try {
    const res = await serverRequest(
      'user/post?subpath=search',
      {
        body: JSON.stringify({
          searchTerm,
          skip,
          limit,
        }),
      },
      true
    );

    setResults(res?.results ?? []);
    setNumTotalRecords((doc: Record<string, number>) => ({
      ...doc,
      search: res?.numTotalRecords ?? 0,
    }));
    return res?.results ?? [];
  } catch (error: any) {
    Alert.alert(error.message);
  }
};
