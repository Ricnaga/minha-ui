import { ref, onMounted, onUnmounted } from 'vue';

type StorageBroadcastMessage =
  | { type: 'set'; key: string }
  | { type: 'remove'; key: string }
  | { type: 'clear' };

export function useLocalStorage<T>(key: string, initialValue?: T) {
  const value = ref<T | null>(initialValue ?? null);
  let channel: BroadcastChannel | null = null;

  const read = () => {
    try {
      const item = localStorage.getItem(key);
      if (item === null) {
        value.value = initialValue ?? null;
        return;
      }
      value.value = JSON.parse(item) as T;
    } catch {
      value.value = initialValue ?? null;
    }
  };

  const create = (val: T) => {
    try {
      localStorage.setItem(key, JSON.stringify(val));
      value.value = val;
      channel?.postMessage({ type: 'set', key } satisfies StorageBroadcastMessage);
    } catch {
      // ignore
    }
  };

  const remove = () => {
    try {
      localStorage.removeItem(key);
      value.value = initialValue ?? null;
      channel?.postMessage({ type: 'remove', key } satisfies StorageBroadcastMessage);
    } catch {
      // ignore
    }
  };

  const clear = () => {
    try {
      localStorage.clear();
      value.value = initialValue ?? null;
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

  onMounted(() => {
    read();
    if (typeof BroadcastChannel !== 'undefined') {
      channel = new BroadcastChannel('ds:local-storage');
      channel.onmessage = handleMessage;
    }
    window.addEventListener('storage', read);
  });

  onUnmounted(() => {
    window.removeEventListener('storage', read);
    channel?.close();
    channel = null;
  });

  return {
    value,
    create,
    remove,
    clear,
  };
}
