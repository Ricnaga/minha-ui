import { tv, type VariantProps } from "tailwind-variants";

export const tabs = tv({
  slots: {
    base: "",
    wrapper: "flex items-center gap-2 text-sm font-medium",
    list: "flex-1",
    listItem: [
      "flex items-center justify-center gap-2 px-3 py-2.5 hover:cursor-pointer transition-all",
      "transition-colors duration-300 ease-in-out",
    ],
  },
  variants: {
    variant: {
      default: {
        base: "border-b border-b-gray-200",
        wrapper: "-mb-px",
        listItem: [
          "relative text-gray-500 hover:text-sky-700",
          "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-sky-700 after:transition-all after:duration-300 after:ease-in-out",
        ],
      },
      ghost: {
        listItem: [
          "rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-700",
        ],
      },
      contained: {
        base: "overflow-hidden rounded-xl border border-gray-100 bg-gray-50 p-1",
        listItem: [
          "rounded-lg text-gray-500 hover:bg-white hover:text-gray-700 hover:shadow",
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
          "text-sky-700",
          "after:left-0 after:w-full",
        ],
      },
    },
    {
      isSelected: true,
      variant: "ghost",
      class: {
        listItem: ["bg-gray-200 text-gray-700 hover:text-gray-700"],
      },
    },
    {
      isSelected: true,
      variant: "contained",
      class: {
        listItem: [
          "bg-white text-gray-700 shadow hover:bg-white hover:text-gray-700",
        ],
      },
    },
  ],
  defaultVariants: {
    variant: "default",
  },
});

export type TabsVariants = VariantProps<typeof tabs>;
