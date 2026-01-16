import type { FetcherBase } from "@/types";

export const fetcher = async <T extends unknown | string = string>(
  data: FetcherBase
): Promise<T> => {
  const FETCHER_URL = new URL(data.endpoint, data.baseURL);

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
