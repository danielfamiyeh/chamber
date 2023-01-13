import { useEffect, useCallback } from 'react';

export const useDebounce = (
  effect: () => void,
  dependencies: any[],
  delay: number
) => {
  const callback = useCallback(effect, [...dependencies, effect]);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
};
