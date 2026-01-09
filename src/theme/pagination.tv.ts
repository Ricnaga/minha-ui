import { tv, type VariantProps } from "tailwind-variants";

// Container principal do pagination
export const pagination = tv({
  slots: {
    base: "grid items-center space-y-2",
    wrapper: "flex items-center space-x-2 justify-center",
    items: "flex items-center space-x-1",
    icons: [
      "fill-indigo-500 hover:fill-sky-700",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded",
    ],
    description: "text-center text-sm text-neutral-800",
  },
});

export type PaginationVariants = VariantProps<typeof pagination>;

// Botão base do pagination
export const paginationButton = tv({
  base: [
    "transition-colors duration-300 cursor-pointer",
    "grid items-center justify-center",
    "size-8 rounded-full bg-sky-100 text-sky-700 hover:bg-sky-200 focus-visible:ring-2",
    "focus-visible:ring-sky-500 focus-visible:outline-none",
  ],
});

// Controles de paginação (números / ellipsis)
export const paginationControls = tv({
  slots: {
    ellipsis: "size-8 text-neutral-500 flex items-center justify-center",
    buttonPage: [
      "size-8",
      "p-2",
      "rounded-full",
      "transition-all",
      "duration-300",
      "cursor-pointer",
      "flex items-center justify-center",
    ],
  },
  variants: {
    isCurrentPage: {
      true: {
        buttonPage: [
          "size-9",
          "scale-110",
          "bg-sky-600",
          "text-white",
          "rounded-full",
        ],
      },
      false: {
        buttonPage: [
          "bg-neutral-100 text-neutral-700",
          "hover:bg-sky-100 hover:text-sky-700",
        ],
      },
    },
  },
  defaultVariants: {
    isCurrentPage: false,
  },
});

export type PaginationControlsVariants = VariantProps<
  typeof paginationControls
>;
