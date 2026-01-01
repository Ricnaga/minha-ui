import type { VideoPlayerVariants } from "@/theme";
import type { PlayerProps } from "./_components/Player";
import type { ThumbnailProps } from "./_components/Thumbnail";

export type UseVideoPlayerProps = VideoPlayerVariants &
  Omit<PlayerProps, "children" | "className"> &
  Omit<ThumbnailProps, "onOpen">;

export type VideoPlayerProps = UseVideoPlayerProps;
