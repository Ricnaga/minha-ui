import { useCallback, useEffect, useState } from "react";
import {
  createResource,
  getCacheKey,
  invalidateResource,
} from "src/infra/fetchers/wrapper";
import type { FetcherBase } from "src/types/api";

export function useResource<T>(props: FetcherBase) {
  const [resource, setResource] = useState(() => createResource<T>(props));

  // cleanup automático ao desmontar
  useEffect(() => {
    return () => {
      resource.abort();
    };
  }, [resource]);

  // função para refetch
  const refetch = useCallback(() => {
    const newResource = createResource<T>(props);
    resource.abort(); // cancela fetch pendente
    setResource(newResource);
  }, [props, resource]);

  const invalidate = useCallback(() => {
    const key = getCacheKey(props);
    invalidateResource(key);
    setResource(createResource<T>(props)); // garante que hook use novo resource
  }, [props]);

  const data = resource.read();

  return { data, refetch, invalidate };
}
