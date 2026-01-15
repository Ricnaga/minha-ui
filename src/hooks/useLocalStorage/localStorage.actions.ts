type Listener = VoidFunction;

const listeners = new Set<Listener>();

const emit = () => {
  listeners.forEach((listener) => listener());
};

const subscribe = (listener: Listener) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

const getItem = <T>(key: string): T | null => {
  if (typeof window === "undefined") return null;

  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
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
  addEventListener("storage", emit);
}

export const localStorageStore = {
  subscribe,
  getItem,
  setItem,
  removeItem,
  clear,
};
