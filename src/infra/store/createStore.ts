import { useSyncExternalStore } from "react";
import { createObserverStore } from "../state";

export function createStore<T>(initialValue: T) {
  const { getSnapshot, subscribe, setState } =
    createObserverStore(initialValue);

  function useStore() {
    return {
      state: useSyncExternalStore<T>(subscribe, getSnapshot),
      setState,
    };
  }

  return useStore;
}
