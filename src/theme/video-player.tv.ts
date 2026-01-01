import { tv, type VariantProps } from "tailwind-variants";

export const videoPlayer = tv({
  base: "group",
  slots: {
    thumbnail: ["rounded-3xl shadow-2xl w-full h-auto brightness-50"],
    thumbnailButton: [
      "relative rounded-3xl",
      "focus:outline-none cursor-pointer",
    ],
    thumbnailIcon: [
      "absolute inset-0 pointer-events-none",
      "flex items-center justify-center",
      "text-4xl text-white",
    ],
    player: ["size-full"],
  },
});

export type VideoPlayerVariants = VariantProps<typeof videoPlayer>;
