import { tv, type VariantProps } from "tailwind-variants";

export const drawerFooter = tv({
  base: "p-4 border-t border-t-neutral-200 flex justify-end gap-2",
  variants: {
    align: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
    },
    padding: {
      sm: "p-2",
      md: "p-4",
      lg: "p-6",
    },
    border: {
      none: "border-t-0",
      thin: "border-t",
      thick: "border-t-2",
    },
  },
  defaultVariants: {
    align: "end",
    padding: "md",
    border: "none",
  },
});

export type DrawerFooterVariants = VariantProps<typeof drawerFooter>;
