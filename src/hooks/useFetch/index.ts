import { useState, useCallback, useEffect, useMemo, useRef } from "react";

export type ParamsType = {
  params?: object;
};

export interface FetcherBase<T extends unknown | string = string>
  extends ParamsType {
  baseURL?: T;
  endpoint: string;
  config?: RequestInit;
}

const fetcher = async <T extends unknown | string = string>(
  data: FetcherBase
): Promise<T> => {
  const FETCHER_URL = new URL("/api".concat(data.endpoint), data.baseURL);

  if (data.params) {
    Object.entries(data.params).forEach(([key, value]) => {
      FETCHER_URL.searchParams.set(key, value);
    });
  }

  const response = await fetch(FETCHER_URL.toString(), {
    ...data.config,
    headers: {
      "Content-Type": "application/json",
      ...data.config?.headers,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          "HTTP error! status:".concat(response.status.toString())
        );
      }

      return response.json();
    })
    .catch((response) => {
      console.error("ERRO: API INACESSÍVEL");
      throw new Error(response);
    });

  return response;
};

interface UseFetchOptions extends FetcherBase {
  isRequesting?: boolean;
}

type FetchState<T> = {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
};

export function useFetch<T = unknown>(options: UseFetchOptions) {
  const { isRequesting = true, ...fetchOptions } = options;

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
          config: { ...memoizedOptions, signal },
        });

        setState((prev) => ({ ...prev, data, isLoading: false }));
      } catch (err) {
        if (!(err instanceof DOMException && err.name === "AbortError")) {
          setState((prev) => ({
            ...prev,
            isLoading: false,
            error: err as Error,
          }));
        }
      }
    },
    [memoizedOptions]
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
