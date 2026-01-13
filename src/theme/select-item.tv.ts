import { tv, type VariantProps } from "tailwind-variants";

export const selectItem = tv({
  slots: {
    list: ["grid gap-2 w-full"],
    item: [
      "cursor-pointer p-2 transition-all truncate",
      "hover:bg-sky-400/20 rounded-md active:bg-sky-400/40 hover:font-semibold text-sm",
    ],
  },
  variants: {
    isSelected: {
      true: {
        item: "bg-sky-400/20 font-semibold",
      },
    },
  },
});

export type SelectItemVariants = VariantProps<typeof selectItem>;
