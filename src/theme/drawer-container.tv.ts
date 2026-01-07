import { tv, type VariantProps } from "tailwind-variants";

export const drawerContainer = tv({
  base: [
    "fixed bg-white p-6",
    "duration-200 ease-out",
    "pointer-events-none",
    "will-change-transform",
    "z-(--z-drawer,50)",
  ],
  variants: {
    isOpen: {
      true: "pointer-events-auto animate-in opacity-100",
      false: "animate-out opacity-0",
    },
    side: {
      right: "top-0 right-0 h-full w-80",
      left: "top-0 left-0 h-full w-80",
      bottom: "bottom-0 left-0 w-full h-80",
      top: "top-0 left-0 w-full h-80",
    },
  },
  compoundVariants: [
    { isOpen: true, side: "right", class: "slide-in-from-right" },
    { isOpen: false, side: "right", class: "slide-out-to-right" },

    { isOpen: true, side: "left", class: "slide-in-from-left" },
    { isOpen: false, side: "left", class: "slide-out-to-left" },

    { isOpen: true, side: "bottom", class: "slide-in-from-bottom" },
    { isOpen: false, side: "bottom", class: "slide-out-to-bottom" },

    { isOpen: true, side: "top", class: "slide-in-from-top" },
    { isOpen: false, side: "top", class: "slide-out-to-top" },
  ],

  defaultVariants: {
    side: "right",
    isOpen: false,
  },
});

export type DrawerContainerVariants = VariantProps<typeof drawerContainer>;
