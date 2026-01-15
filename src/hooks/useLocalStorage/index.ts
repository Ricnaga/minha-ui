import { useSyncExternalStore } from "react";
import { localStorageStore } from "./localStorage.actions";

export function useLocalStorage<T>(key: string, initialValue?: T) {
  const value = useSyncExternalStore(
    localStorageStore.subscribe,
    () => localStorageStore.getItem<T>(key) ?? initialValue ?? null,
    () => initialValue ?? null // SSR
  );

  const create = (value: T) => {
    localStorageStore.setItem(key, value);
  };

  const remove = () => {
    localStorageStore.removeItem(key);
  };

  const clear = () => {
    localStorageStore.clear();
  };

  return {
    value,
    create,
    remove,
    clear,
  };
}
