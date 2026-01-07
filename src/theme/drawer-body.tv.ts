import { tv, type VariantProps } from "tailwind-variants";

export const drawerBody = tv({
  base: "flex-1 overflow-y-auto px-4 py-2",
  variants: {
    padding: {
      sm: "px-2 py-1",
      md: "px-4 py-2",
      lg: "px-6 py-3",
    },
    scroll: {
      auto: "overflow-y-auto",
      hidden: "overflow-y-hidden",
      smooth: "overflow-y-auto scroll-smooth",
    },
    background: {
      default: "bg-white",
      gray: "bg-gray-50",
      dark: "bg-gray-800 text-white",
    },
  },
  defaultVariants: {
    padding: "md",
    scroll: "auto",
    background: "default",
  },
});

export type DrawerBodyVariants = VariantProps<typeof drawerBody>;
