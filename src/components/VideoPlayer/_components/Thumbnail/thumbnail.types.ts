import type { VideoPlayerVariants } from "@/theme";

export interface UseThumbnailProps
  extends Pick<VideoPlayerVariants, "thumbnailSize"> {
  thumbnailSrc: string;
  alt?: string;
  onOpen: VoidFunction;
}
export type ThumbnailProps = UseThumbnailProps;
