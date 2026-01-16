import type { FetcherBase } from "@/types";
import type { Resource } from "./wrapper";

export const resourceCache = new Map<string, Resource>();

export function getCacheKey(data: FetcherBase) {
  return `${data.baseURL}${data.endpoint}?${JSON.stringify(data.params ?? {})}`;
}

export function getCachedResource(key: string): Resource | undefined {
  return resourceCache.get(key);
}

export function setCachedResource(key: string, resource: Resource) {
  resourceCache.set(key, resource);
}

export function invalidateResource(key: string) {
  if (resourceCache.has(key)) {
    const resource = resourceCache.get(key)!;
    resource.abort(); // opcional
    resourceCache.delete(key);
  }
}

export function clearCache() {
  resourceCache.forEach((r) => r.abort());
  resourceCache.clear();
}
