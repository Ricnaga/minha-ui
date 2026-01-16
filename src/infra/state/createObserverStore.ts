const createListeners = () => {
  const listeners = new Set<VoidFunction>();

  return {
    subscribe: (listener: VoidFunction) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    notify: () => {
      listeners.forEach((listener) => listener());
    },
    clear: () => {
      listeners.clear();
    },
  };
};

export function createObserverStore<T>(initialValue: T) {
  let state = initialValue;

  const listeners = createListeners();

  return {
    getState: () => state,
    getSnapshot: () => state,
    destroy: () => listeners.clear(),
    subscribe: listeners.subscribe,
    setState(next: T | ((prev: T) => T)) {
      const nextState =
        typeof next === "function" ? (next as (prev: T) => T)(state) : next;

      if (!Object.is(nextState, state)) {
        state = nextState;
        listeners.notify();
      }
    },
  };
}
