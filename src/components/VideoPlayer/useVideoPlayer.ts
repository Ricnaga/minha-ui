import { useToggle } from "@/hooks";
import type { UseVideoPlayerProps } from "./video-player.types";
import type { ThumbnailProps } from "./_components/Thumbnail";
import type { PlayerProps } from "./_components/Player";

export function useVideoPlayer(props: UseVideoPlayerProps) {
  const { thumbnailSrc, alt, ...rest } = props;

  const { isToggle, handleClose, handleOpen } = useToggle();

  const thumbnailProps: ThumbnailProps = {
    onOpen: handleOpen,
    thumbnailSrc,
    alt,
  };

  const playerProps: PlayerProps = { ...rest };

  return { isToggle, handleClose, thumbnailProps, playerProps };
}
