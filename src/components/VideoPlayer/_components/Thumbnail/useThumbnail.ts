import type { HTMLAttributes, ImgHTMLAttributes } from "react";
import type { UseThumbnailProps } from "./thumbnail.types";
import { videoPlayer } from "@/theme";

const { thumbnail, thumbnailButton, thumbnailIcon } = videoPlayer();

export function useThumbnail(props: UseThumbnailProps) {
  const { onOpen, thumbnailSrc, alt } = props;

  const playButtonProps: HTMLAttributes<HTMLButtonElement> = {
    onClick: onOpen,
    className: thumbnailButton(),
    "aria-label": "Play video",
  };

  const coverProps: ImgHTMLAttributes<HTMLImageElement> = {
    src: thumbnailSrc,
    alt,
    className: thumbnail(),
  };

  const playIconProps: HTMLAttributes<HTMLSpanElement> = {
    className: thumbnailIcon(),
  };

  return { playButtonProps, coverProps, playIconProps };
}
