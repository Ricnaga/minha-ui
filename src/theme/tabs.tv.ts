import { tv, type VariantProps } from "tailwind-variants";

export const tabs = tv({
  slots: {
    base: "",
    wrapper: "",
    list: "",
    listItem: "",
  },
  variants: {
    variant: {
      default: {
        base: "border-b border-b-gray-200",
        wrapper: "-mb-px flex items-center gap-4 text-sm font-medium",
        list: "flex-1",
        listItem:
          "flex items-center justify-center gap-2 px-1 py-3 text-gray-500 hover:text-blue-700",
      },
      ghost: {
        wrapper: "flex items-center gap-2 text-sm font-medium",
        list: "flex-1",
        listItem: [
          "flex items-center justify-center gap-2 rounded-lg px-3 py-2",
          "text-gray-500 hover:bg-gray-50 hover:text-gray-700",
        ],
      },
      contained: {
        base: "overflow-hidden rounded-xl border border-gray-100 bg-gray-50 p-1",
        wrapper: "flex items-center gap-2 text-sm font-medium",
        list: "flex-1",
        listItem: [
          "flex items-center justify-center gap-2 rounded-lg px-3 py-2 ",
          "text-gray-500 hover:bg-white hover:text-gray-700 hover:shadow",
        ],
      },
    },
    isSelected: {
      true: "",
    },
  },
  compoundVariants: [
    {
      isSelected: true,
      variant: "default",
      class: {
        listItem: [
          "relative flex items-center justify-center gap-2 px-1 py-3 text-blue-700 hover:text-blue-700",
          "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-blue-700",
        ],
      },
    },
    {
      isSelected: true,
      variant: "ghost",
      class: {
        listItem: [
          "relative flex items-center justify-center gap-2 px-3 py-2 rounded-lg",
          "bg-gray-200 text-gray-700 hover:text-gray-700",
        ],
      },
    },
    {
      isSelected: true,
      variant: "contained",
      class: {
        listItem: [
          "text-gra relative flex items-center justify-center gap-2 rounded-lg",
          "bg-white px-3 py-2 shadow hover:bg-white hover:text-gray-700",
        ],
      },
    },
  ],
  defaultVariants: {
    variant: "default",
  },
});

export type TabsVariant = VariantProps<typeof tabs>;
