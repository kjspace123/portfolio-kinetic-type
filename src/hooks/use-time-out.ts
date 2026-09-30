import { useEffect, type DependencyList } from 'react';

interface UseTimeOutParams {
  callback: () => void;
  duration?: number;
  deps?: DependencyList;
}

export function useTimeOut({ callback, duration = 100, deps = [] }: UseTimeOutParams) {
  useEffect(() => {
    const timeout = setTimeout(callback, duration);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
