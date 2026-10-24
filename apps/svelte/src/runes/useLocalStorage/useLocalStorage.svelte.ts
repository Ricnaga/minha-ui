type StorageBroadcastMessage =
  | { type: 'set'; key: string }
  | { type: 'remove'; key: string }
  | { type: 'clear' };

export function useLocalStorage<T>(key: string, initialValue?: T) {
  let value = $state<T | null>(initialValue ?? null);
  let channel: BroadcastChannel | null = null;

  const read = () => {
    try {
      const item = localStorage.getItem(key);
      if (item === null) {
        value = initialValue ?? null;
        return;
      }
      value = JSON.parse(item) as T;
    } catch {
      value = initialValue ?? null;
    }
  };

  const create = (val: T) => {
    try {
      localStorage.setItem(key, JSON.stringify(val));
      value = val;
      channel?.postMessage({ type: 'set', key } satisfies StorageBroadcastMessage);
    } catch {
      // ignore
    }
  };

  const remove = () => {
    try {
      localStorage.removeItem(key);
      value = initialValue ?? null;
      channel?.postMessage({ type: 'remove', key } satisfies StorageBroadcastMessage);
    } catch {
      // ignore
    }
  };

  const clear = () => {
    try {
      localStorage.clear();
      value = initialValue ?? null;
      channel?.postMessage({ type: 'clear' } satisfies StorageBroadcastMessage);
    } catch {
      // ignore
    }
  };

  const handleMessage = (event: MessageEvent<StorageBroadcastMessage>) => {
    const message = event.data;
    if (!message) return;
    if (message.type === 'clear') {
      read();
      return;
    }
    if (message.key === key) {
      read();
    }
  };

  $effect(() => {
    read();
    if (typeof BroadcastChannel !== 'undefined') {
      channel = new BroadcastChannel('ds:local-storage');
      channel.onmessage = handleMessage;
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', read);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('storage', read);
      }
      channel?.close();
      channel = null;
    };
  });

  return {
    get value() {
      return value;
    },
    create,
    remove,
    clear,
  };
}
