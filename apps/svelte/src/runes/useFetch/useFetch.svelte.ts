import type { FetcherBase } from '@/types';
import { fetcher } from '@/infra/fetchers';

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

  let state = $state<UseFetchState<T>>(
    isRequesting ? { status: 'loading' } : { status: 'idle' }
  );
  let abortController: AbortController | null = null;

  const fetchData = async (signal?: AbortSignal) => {
    state = { status: 'loading' };

    try {
      const data = await fetcher<T>({
        endpoint: (fetchOptions as FetcherBase).endpoint,
        baseURL,
        config: { ...(fetchOptions as FetcherBase).config, signal },
        params: (fetchOptions as FetcherBase).params,
      } as FetcherBase);

      state = { status: 'success', data };
    } catch (err) {
      if (!(err instanceof DOMException && err.name === 'AbortError')) {
        state = { status: 'error', error: err as Error };
      }
    }
  };

  const refetch = () => {
    if (abortController) {
      abortController.abort();
    }

    abortController = new AbortController();
    fetchData(abortController.signal);
  };

  $effect(() => {
    if (isRequesting) {
      abortController = new AbortController();
      fetchData(abortController.signal);
    }
    return () => {
      abortController?.abort();
      abortController = null;
    };
  });

  return {
    get state() {
      return state;
    },
    get data() {
      return state.status === 'success' ? state.data : null;
    },
    get error() {
      return state.status === 'error' ? state.error : null;
    },
    get isIdle() {
      return state.status === 'idle';
    },
    get isLoading() {
      return state.status === 'loading';
    },
    get isSuccess() {
      return state.status === 'success';
    },
    get isError() {
      return state.status === 'error';
    },
    refetch,
  };
}
