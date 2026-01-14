import type { VideoPlayerVariants } from "@/theme";
import type { VideoHTMLAttributes } from "react";

export interface UsePlayerProps extends Pick<VideoPlayerVariants, "playerSize"> ,
  VideoHTMLAttributes<HTMLVideoElement>  {
    isOpen: boolean;
  };

export type PlayerProps = UsePlayerProps;
