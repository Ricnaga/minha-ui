import type { FetcherBase } from '@/types';
import { computed, onMounted, onUnmounted, ref } from 'vue';
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

  const state = ref<UseFetchState<T>>(
    isRequesting ? { status: 'loading' } : { status: 'idle' }
  );

  let abortController: AbortController | null = null;

  const fetchData = async (signal?: AbortSignal) => {
    state.value = { status: 'loading' };

    try {
      const data = await fetcher<T>({
        endpoint: (fetchOptions as FetcherBase).endpoint,
        baseURL,
        config: { ...(fetchOptions as FetcherBase).config, signal },
        params: (fetchOptions as FetcherBase).params,
      } as FetcherBase);

      state.value = { status: 'success', data };
    } catch (err) {
      if (!(err instanceof DOMException && err.name === 'AbortError')) {
        state.value = { status: 'error', error: err as Error };
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

  onMounted(() => {
    if (isRequesting) {
      abortController = new AbortController();
      fetchData(abortController.signal);
    }
  });

  onUnmounted(() => {
    abortController?.abort();
    abortController = null;
  });

  const data = computed(() => (state.value.status === 'success' ? state.value.data : null));
  const error = computed(() => (state.value.status === 'error' ? state.value.error : null));
  const isIdle = computed(() => state.value.status === 'idle');
  const isLoading = computed(() => state.value.status === 'loading');
  const isSuccess = computed(() => state.value.status === 'success');
  const isError = computed(() => state.value.status === 'error');

  return {
    state,
    data,
    error,
    isIdle,
    isLoading,
    isSuccess,
    isError,
    refetch,
  };
}
