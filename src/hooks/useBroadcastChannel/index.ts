import { useCallback, useEffect } from "react";

type BroadcastHandler<T> = (data: T) => void;

export function useBroadcastChannel<T>(
  name: string,
  onMessage: BroadcastHandler<T>
) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (typeof BroadcastChannel === "undefined") return;

    const channel = new BroadcastChannel(name);

    channel.onmessage = (event) => {
      onMessage(event.data);
    };

    return () => {
      channel.close();
    };
  }, [name, onMessage]);

  const post = useCallback(
    (data: T) => {
      if (typeof BroadcastChannel === "undefined") return;
      const channel = new BroadcastChannel(name);
      channel.postMessage(data);
      channel.close();
    },
    [name]
  );

  return { post };
}
