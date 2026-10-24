import type { FetcherBase } from '@/types';

export const fetcher = async <T extends unknown | string = string>(
  data: FetcherBase,
): Promise<T> => {
  const FETCHER_URL = new URL(data.endpoint, data.baseURL);

  if (data.params) {
    Object.entries(data.params).forEach(([key, value]) => {
      FETCHER_URL.searchParams.set(key, String(value));
    });
  }

  const response = await fetch(FETCHER_URL.toString(), {
    ...data.config,
    headers: {
      'Content-Type': 'application/json',
      ...data.config?.headers,
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error('HTTP error! status:'.concat(res.status.toString()));
      }

      return res.json();
    })
    .catch((err) => {
      console.error('ERRO: API INACESSÍVEL');
      throw err instanceof Error ? err : new Error(String(err));
    });

  return response;
};
