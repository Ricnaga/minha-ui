import type { FetcherBase } from "@/types";
import { fetcher } from "./fetcher";

const FetchStatus = {
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
} as const;

type Status = (typeof FetchStatus)[keyof typeof FetchStatus];

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

const resourceCache = new Map<string, ReturnType<typeof promiseWrapper>>();

export function getCacheKey(data: FetcherBase) {
  return `${data.baseURL}${data.endpoint}?${JSON.stringify(data.params ?? {})}`;
}

export const createResource = <T>(data: FetcherBase) => {
  const key = getCacheKey(data);

  if (resourceCache.has(key)) return resourceCache.get(key)!;

  const resource = promiseWrapper<T>((signal) =>
    fetcher<T>({ ...data, config: { ...data.config, signal } }),
  );

  resourceCache.set(key, resource);
  return resource;
};

export function invalidateResource(key: string) {
  if (resourceCache.has(key)) {
    const resource = resourceCache.get(key)!;
    resource.abort(); // opcional: cancela fetch pendente
    resourceCache.delete(key);
  }
}
