import type { FetcherBase } from '@/types';
import { getCacheKey, invalidateResource } from '@/infra/fetchers/cache';
import { createResource, type Resource } from '@/infra/fetchers/wrapper';

export function useResource<T>(props: FetcherBase) {
  let resource: Resource = createResource<T>(props);

  $effect(() => {
    return () => {
      resource.abort();
    };
  });

  const refetch = () => {
    resource.abort();
    resource = createResource<T>(props);
  };

  const invalidate = () => {
    const key = getCacheKey(props);
    invalidateResource(key);
    resource = createResource<T>(props);
  };

  const data = resource.read();

  return {
    get data() {
      return data;
    },
    refetch,
    invalidate,
  };
}
