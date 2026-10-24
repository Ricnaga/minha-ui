type BroadcastHandler<T> = (data: T) => void;

export function useBroadcastChannel<T>(name: string, onMessage: BroadcastHandler<T>) {
  let channel: BroadcastChannel | null = null;

  $effect(() => {
    if (typeof window === 'undefined') return;
    if (typeof BroadcastChannel === 'undefined') return;

    channel = new BroadcastChannel(name);
    channel.onmessage = (event) => {
      onMessage(event.data);
    };

    return () => {
      channel?.close();
      channel = null;
    };
  });

  const post = (data: T) => {
    if (typeof BroadcastChannel === 'undefined') return;
    const ch = new BroadcastChannel(name);
    ch.postMessage(data);
    ch.close();
  };

  return { post };
}
