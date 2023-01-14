import { useState, useReducer } from 'react';

export const paginateOffset = 10;

export type NumTotalRecordsMap = Record<string, number>;
export type PaginationDispatch = React.Dispatch<{
  key: string;
  direction: PageDirection;
}>;
export type PaginationMap = Record<
  string,
  { skip: number; limit: number; numTotalRecords: number }
>;
export enum PageDirection {
  LEFT = -1,
  RIGHT = 1,
}

const paginateReducer = (
  state: PaginationMap,
  {
    key,
    direction,
    numTotalRecords,
  }: { key: string; direction: PageDirection; numTotalRecords: number }
) => {
  const nextState: PaginationMap = JSON.parse(JSON.stringify(state));
  const entry = nextState[key];

  switch (direction) {
    case PageDirection.LEFT: {
      if (entry.skip) {
        entry.skip -= paginateOffset;
        entry.limit -= paginateOffset;
      }
      break;
    }
    case PageDirection.RIGHT: {
      if (entry.skip + paginateOffset <= numTotalRecords) {
        entry.skip + paginateOffset;
        entry.limit + paginateOffset;
      }
      break;
    }

    default:
  }
  return nextState;
};

export const usePaginate = (...keys: string[]) => {
  const [state, dispatch] = useReducer(
    paginateReducer,
    Object.assign(
      {},
      ...keys.map((key) => ({
        [key]: { skip: 0, limit: paginateOffset, numTotalRecords: 0 },
      }))
    )
  );

  const [numTotalRecords, setNumTotalRecords] = useState(
    Object.assign({}, ...keys.map((key) => ({ [key]: 0 })))
  );

  return [state, dispatch, numTotalRecords, setNumTotalRecords];
};
