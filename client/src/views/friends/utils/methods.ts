import { Alert } from 'react-native';
import { serverRequest } from '../../../utils/methods/network';

export const searchUsers = async (
  searchTerm: string,
  skip: number,
  limit: number,
  setResults: Function
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
    return res?.results ?? [];
  } catch (error: any) {
    Alert.alert(error.message);
  }
};

export enum Paginate {
  LEFT = -1,
  RIGHT = 1,
}

export const paginateOffset = 10;

export const onPaginate = (
  direction: Paginate,
  skip: number,
  numResults: number,
  setSkip: Function,
  setLimit: Function
) => {
  if (direction === Paginate.LEFT) {
    setSkip((_skip: number) =>
      !skip
        ? skip
        : (() => {
            setLimit((_limit: number) => _limit - paginateOffset);
            return skip - paginateOffset;
          })()
    );
  } else {
    setSkip((_skip: number) =>
      skip + paginateOffset > numResults
        ? skip
        : (() => {
            setLimit((_limit: number) => _limit + paginateOffset);
            return skip + paginateOffset;
          })()
    );
  }
};
