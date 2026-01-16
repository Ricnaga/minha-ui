import type { FetcherBase } from "@/types";
import { getCachedResource, getCacheKey, setCachedResource } from "./cache";
import { fetcher } from "./fetcher";

export const FetchStatus = {
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
} as const;

export type Status = (typeof FetchStatus)[keyof typeof FetchStatus];

export type Resource = ReturnType<typeof promiseWrapper>;

export const promiseWrapper = <T>(
  factory: (signal: AbortSignal) => Promise<T>,
) => {
  const controller = new AbortController();

  let status: Status = FetchStatus.PENDING;
  let result: T | Error;

  const suspender = factory(controller.signal).then(
    (value) => {
      status = FetchStatus.SUCCESS;
      result = value;
    },
    (error) => {
      status = FetchStatus.ERROR;
      result = error instanceof Error ? error : new Error(String(error));
    },
  );

  return {
    read() {
      switch (status) {
        case FetchStatus.PENDING:
          throw suspender;
        case FetchStatus.SUCCESS:
          return result as T;
        case FetchStatus.ERROR:
          throw result;
      }
    },
    abort() {
      controller.abort();
    },
  };
};

export const createResource = <T>(data: FetcherBase) => {
  const key = getCacheKey(data);

  const cached = getCachedResource(key);
  if (cached) return cached;

  const resource = promiseWrapper<T>((signal) =>
    fetcher<T>({ ...data, config: { ...data.config, signal } }),
  );

  setCachedResource(key, resource);

  return resource;
};
