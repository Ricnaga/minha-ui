import { useDisclosure } from "@/hooks";
import type { PlayerProps } from "./_components/Player";
import type { ThumbnailProps } from "./_components/Thumbnail";
import type { UseVideoPlayerProps } from "./video-player.types";

export function useVideoPlayer(props: UseVideoPlayerProps) {
  const {
    thumbnailSrc,
    alt,
    playerSize = "md",
    thumbnailSize = "md",
    ...rest
  } = props;

  const { isOpen, handleClose, handleOpen } = useDisclosure();

  const thumbnailProps: ThumbnailProps = {
    onOpen: handleOpen,
    thumbnailSrc,
    alt,
    thumbnailSize,
  };

  const playerProps: PlayerProps = {
    ...rest,
    isOpen,
    onBlur: handleClose,
    onKeyDown: handleClose,
    playerSize,
  };

  return { isOpen, handleClose, thumbnailProps, playerProps };
}
