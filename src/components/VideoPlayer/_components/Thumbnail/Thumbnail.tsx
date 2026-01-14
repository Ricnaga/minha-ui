import { PlayIcon } from "@phosphor-icons/react";
import type { ThumbnailProps } from "./thumbnail.types";
import { useThumbnail } from "./useThumbnail";

export function Thumbnail(props: ThumbnailProps) {
  const { playButtonProps, coverProps, playIconProps } = useThumbnail(props);

  return (
    <button {...playButtonProps}>
      <img {...coverProps} />

      {/* Indicador visual de play */}
      <span {...playIconProps}>
        <PlayIcon weight="fill" />
      </span>
    </button>
  );
}
