import {
  useEffect,
  useRef,
  type FocusEvent,
  type KeyboardEvent,
  type SourceHTMLAttributes,
} from "react";
import type { PlayerProps, UsePlayerProps } from "./player.types";
import { videoPlayer } from "@/theme";

const { player } = videoPlayer();

export function usePlayer(props: UsePlayerProps) {
  const { src, playerSize, onBlur, onKeyDown, isOpen, ...rest } = props;
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play quando abrir, pausa quando desmontar
  useEffect(() => {
    const videoCurrent = videoRef.current;

    if (isOpen) {
      videoCurrent?.play();
      videoCurrent?.focus();
    }

    return () => videoCurrent?.pause();
  }, [isOpen]);

  function handleBlur(e: FocusEvent<HTMLVideoElement>) {
    videoRef.current?.pause();
    onBlur?.(e);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLVideoElement>) {
    if (e.key === "Escape") {
      videoRef.current?.pause();
      onKeyDown?.(e);

      return;
    }
  }

  const playerProps: Omit<PlayerProps, "isOpen"> = {
    ...rest,
    role: "video",
    tabIndex: 0,
    "aria-label": "Video player",
    onBlur: handleBlur,
    onKeyDown: handleKeyDown,
    className: player({ playerSize }),
    controls: true,
    loop: true,
  };

  const sourceProps: SourceHTMLAttributes<HTMLSourceElement> = {
    src,
    type: "video/mp4",
  };

  return { videoRef, playerProps, sourceProps };
}
