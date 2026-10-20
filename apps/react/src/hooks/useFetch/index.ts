import type { FetcherBase } from '@/types';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { fetcher } from 'src/infra/fetchers';

interface UseFetchOptions extends FetcherBase {
  isRequesting?: boolean;
}

export type UseFetchState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };

export function useFetch<T = unknown>(options: UseFetchOptions) {
  const { isRequesting = true, baseURL, ...fetchOptions } = options;

  const [state, setState] = useState<UseFetchState<T>>(
    isRequesting ? { status: 'loading' } : { status: 'idle' },
  );

  const memoizedOptions = useMemo(
    () => fetchOptions,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(fetchOptions)],
  );

  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchData = useCallback(
    async (signal?: AbortSignal) => {
      setState({ status: 'loading' });

      try {
        const data = await fetcher<T>({
          endpoint: memoizedOptions.endpoint,
          baseURL,
          config: { ...memoizedOptions, signal },
        });

        setState({ status: 'success', data });
      } catch (err) {
        if (!(err instanceof DOMException && err.name === 'AbortError')) {
          setState({ status: 'error', error: err as Error });
        }
      }
    },
    [baseURL, memoizedOptions],
  );

  useEffect(() => {
    if (isRequesting) {
      const controller = new AbortController();
      abortControllerRef.current = controller;

      fetchData(controller.signal);

      return () => {
        controller.abort();
        abortControllerRef.current = null;
      };
    }
  }, [fetchData, isRequesting]);

  const refetch = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    fetchData(controller.signal);
  };

  return {
    state,
    data: state.status === 'success' ? state.data : null,
    error: state.status === 'error' ? state.error : null,
    isIdle: state.status === 'idle',
    isLoading: state.status === 'loading',
    isSuccess: state.status === 'success',
    isError: state.status === 'error',
    refetch,
  };
}
