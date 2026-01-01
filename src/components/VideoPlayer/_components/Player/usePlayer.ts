import { useEffect, useRef, type SourceHTMLAttributes } from "react";
import type { PlayerProps, UsePlayerProps } from "./player.types";
import { videoPlayer } from "@/theme";

const { player } = videoPlayer();

export function usePlayer(props: UsePlayerProps) {
  const { src, ...rest } = props;
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play quando abrir, pausa quando desmontar
  useEffect(() => {
    const videoCurrent = videoRef.current;

    videoCurrent?.play();

    return () => videoCurrent?.pause();
  }, []);

  const playerProps: PlayerProps = {
    ...rest,
    className: player(),
    controls: true,
    loop: true,
  };

  const sourceProps: SourceHTMLAttributes<HTMLSourceElement> = {
    src,
    type: "video/mp4",
  };

  return { videoRef, playerProps, sourceProps };
}
