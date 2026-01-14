import type { PlayerProps } from "./player.types";
import { usePlayer } from "./usePlayer";

export function Player(props: PlayerProps) {
  const { playerProps, videoRef, sourceProps } = usePlayer(props);

  return (
    <video {...playerProps} ref={videoRef}>
      <source {...sourceProps} />
      Seu navegador não suporta vídeo.
    </video>
  );
}
