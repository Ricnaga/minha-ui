import { Backdrop } from "../Backdrop";
import { Player } from "./_components/Player";
import { Thumbnail } from "./_components/Thumbnail";
import { useVideoPlayer } from "./useVideoPlayer";
import type { VideoPlayerProps } from "./video-player.types";

export function VideoPlayer(props: VideoPlayerProps) {
  const { isOpen, handleClose, thumbnailProps, playerProps } =
    useVideoPlayer(props);

  return (
    <>
      <Thumbnail {...thumbnailProps} />
      <Backdrop isOpen={isOpen} onClose={handleClose}>
        <div className="absolute inset-0 grid items-center justify-center">
          <Player {...playerProps} />
        </div>
      </Backdrop>
    </>
  );
}
