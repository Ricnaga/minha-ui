import { tv, type VariantProps } from "tailwind-variants";

export const pagination = tv({
  slots: {
    base: "grid items-center space-y-2",
    wrapper: "flex items-center space-x-2",
    items: "flex items-center space-x-2",
    icons: "fill-indigo-500 hover:fill-sky-700",
    description: "text-center text-sm text-neutral-800",
  },
});

export type PaginationVariants = VariantProps<typeof pagination>;

export const paginationButton = tv({
  base: [
    "transition-colors duration-300 cursor-pointer",
    "grid items-center justify-center",
    "size-8 bg-sky-100 text-sky-700 rounded-full hover:bg-sky-20",
  ],
});

export const paginationControls = tv({
  slots: {
    ellipsis: "size-8 text-neutral-500 flex items-center justify-center",
    buttonPage:
      "size-8 rounded-full transition-all duration-300 cursor-pointer",
  },
  variants: {
    isCurrentPage: {
      true: {
        buttonPage: "bg-sky-600 text-white size-9",
      },
      false: {
        buttonPage:
          "bg-neutral-100 text-neutral-700 hover:bg-sky-100 hover:text-sky-700",
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
