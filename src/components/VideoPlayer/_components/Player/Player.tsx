import type { PlayerProps } from "./player.types";
import { usePlayer } from "./usePlayer";

export function Player(props: PlayerProps) {
  const { playerProps, videoRef, sourceProps } = usePlayer(props);

  return (
    <div className="w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl mx-auto">
      <video {...playerProps} ref={videoRef}>
        <source {...sourceProps} />
        Seu navegador não suporta vídeo.
      </video>
    </div>
  );
}
