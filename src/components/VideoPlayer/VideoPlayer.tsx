import { Modal } from "../Modal";
import { ModalHeader } from "../ModalHeader";
import { Player } from "./_components/Player";
import { Thumbnail } from "./_components/Thumbnail";
import { useVideoPlayer } from "./useVideoPlayer";
import type { VideoPlayerProps } from "./video-player.types";

export function VideoPlayer(props: VideoPlayerProps) {
  const { isToggle, handleClose, thumbnailProps, playerProps } =
    useVideoPlayer(props);

  return (
    <>
      <Thumbnail {...thumbnailProps} />
      <Modal isOpen={isToggle} onClose={handleClose} radius="2xl">
        <ModalHeader />
        <Player {...playerProps} />
      </Modal>
    </>
  );
}
