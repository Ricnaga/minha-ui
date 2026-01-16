import type { FetcherBase } from "@/types";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { fetcher } from "src/infra/fetchers";

interface UseFetchOptions extends FetcherBase {
  isRequesting?: boolean;
}

type FetchState<T> = {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
};

export function useFetch<T = unknown>(options: UseFetchOptions) {
  const { isRequesting = true, baseURL, ...fetchOptions } = options;

  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: isRequesting,
    error: null,
  });

  const memoizedOptions = useMemo(
    () => fetchOptions,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(fetchOptions)]
  );

  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchData = useCallback(
    async (signal?: AbortSignal) => {
      setState((prev) => ({ ...prev, isLoading: true, error: null }));

      try {
        const data = await fetcher<T>({
          endpoint: memoizedOptions.endpoint,
          baseURL,
          config: { ...memoizedOptions, signal },
        });

        setState((prev) => ({ ...prev, data, isLoading: false }));
      } catch (err) {
        if (!(err instanceof DOMException && err.name === "AbortError")) {
          setState((prev) => ({
            ...prev,
            data: null,
            isLoading: false,
            error: err as Error,
          }));
        }
      }
    },
    [baseURL, memoizedOptions]
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

  return { ...state, refetch };
}
