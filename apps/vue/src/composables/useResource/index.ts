import type { FetcherBase } from '@/types';
import { onUnmounted, ref } from 'vue';
import { getCacheKey, invalidateResource } from '@/infra/fetchers/cache';
import { createResource, type Resource } from '@/infra/fetchers/wrapper';

export function useResource<T>(props: FetcherBase) {
  const resource = ref<Resource>(createResource<T>(props));

  onUnmounted(() => {
    resource.value.abort();
  });

  const refetch = () => {
    resource.value.abort();
    resource.value = createResource<T>(props);
  };

  const invalidate = () => {
    const key = getCacheKey(props);
    invalidateResource(key);
    resource.value = createResource<T>(props);
  };

  const data = resource.value.read();

  return { data, refetch, invalidate };
}
