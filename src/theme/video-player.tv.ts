import { tv, type VariantProps } from "tailwind-variants";

export const videoPlayer = tv({
  base: "group relative",
  slots: {
    thumbnail: [
      "rounded-3xl shadow-2xl brightness-50",
      "transition-all duration-300 ease-in-out",
      "hover:brightness-60",
    ],
    thumbnailButton: [
      "relative rounded-3xl focus:outline-none cursor-pointer",
      "flex items-center justify-center",
    ],
    thumbnailIcon: [
      "absolute inset-0 pointer-events-none flex items-center justify-center",
      "text-4xl text-sky-600",
    ],
    player: ["rounded-3xl shadow-2xl"],
  },
  variants: {
    thumbnailSize: {
      sm: { thumbnail: "w-48 h-28 hover:w-50 hover:h-30" },
      md: { thumbnail: "w-72 h-40 hover:w-74 hover:h-42" },
      lg: { thumbnail: "w-96 h-56 hover:w-98 hover:h-56" },
    },
    playerSize: {
      sm: { player: "w-48 h-28" },
      md: { player: "w-72 h-40" },
      lg: { player: "w-96 h-56" },
      full: { player: "size-full rounded-none" },
    },
  },
  defaultVariants: {
    thumbnailSize: "md",
    playerSize: "md",
  },
});

export type VideoPlayerVariants = VariantProps<typeof videoPlayer>;
