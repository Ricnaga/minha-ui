import { useSyncExternalStore } from "react";
import { localStorageStore } from "./localStorage.actions";
import { useBroadcastChannel } from "../useBroadcastChannel";

type StorageBroadcastMessage =
  | { type: "set"; key: string }
  | { type: "remove"; key: string }
  | { type: "clear" };

export function useLocalStorage<T>(key: string, initialValue?: T) {
  const value = useSyncExternalStore(
    localStorageStore.subscribe,
    () => localStorageStore.getItem<T>(key) ?? initialValue ?? null,
    () => initialValue ?? null // SSR
  );

  const { post } = useBroadcastChannel<StorageBroadcastMessage>(
    "ds:local-storage",
    (message) => {
      if (!message) return;

      if (message.type === "clear") {
        localStorageStore.emit();
        return;
      }

      localStorageStore.emit(message.key);
    }
  );

  const create = (value: T) => {
    localStorageStore.setItem(key, value);
    post({ type: "set", key });
  };

  const remove = () => {
    localStorageStore.removeItem(key);
    post({ type: "remove", key });
  };

  const clear = () => {
    localStorageStore.clear();
    post({ type: "clear" });
  };

  return {
    value,
    create,
    remove,
    clear,
  };
}
