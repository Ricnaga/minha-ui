type Listener = (key?: string) => void;

const listeners = new Set<Listener>();

const canUseDOM =
  typeof window !== "undefined" && typeof window.localStorage !== "undefined";

const emit = (key?: string) => {
  listeners.forEach((listener) => listener(key));
};

const subscribe = (listener: Listener) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

const getItem = <T>(key: string): T | null => {
  if (!canUseDOM) return null;

  try {
    const value = localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  } catch {
    return null;
  }
};

const setItem = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
  emit();
};

const removeItem = (key: string) => {
  localStorage.removeItem(key);
  emit();
};

const clear = () => {
  localStorage.clear();
  emit();
};

if (typeof window !== "undefined") {
  window.addEventListener("storage", (event) => {
    emit(event.key ?? undefined);
  });
}

export const localStorageStore = {
  subscribe,
  getItem,
  setItem,
  removeItem,
  clear,
  emit,
};
