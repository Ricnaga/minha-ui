import { tv, type VariantProps } from "tailwind-variants";

export const popoverContent = tv({
  base: [
    "absolute z-50 p-2",
    "bg-white text-gray-900",
    "border border-gray-200",
    "will-change-[transform,opacity]",
    "transition-[opacity,transform]",
    "duration-500",
    "data-[state=closed]:opacity-0",
    "data-[state=closed]:pointer-events-none",
    "transform-gpu",
  ],
  variants: {
    side: {
      top: "bottom-full left-1/2 -translate-x-1/2 mb-2 origin-bottom",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-2 origin-top",
      left: "right-full top-1/2 -translate-y-1/2 mr-2 origin-right",
      right: "left-full top-1/2 -translate-y-1/2 ml-2 origin-left",
    },

    shadow: {
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
    },

    radius: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },

    animation: {
      fade: ["data-[state=open]:fade-in-0", "data-[state=closed]:fade-out-0"],

      slide: [
        "data-[side=top]:data-[state=open]:slide-in-from-bottom-2",
        "data-[side=bottom]:data-[state=open]:slide-in-from-top-2",
        "data-[side=left]:data-[state=open]:slide-in-from-right-2",
        "data-[side=right]:data-[state=open]:slide-in-from-left-2",

        "data-[side=top]:data-[state=closed]:slide-out-to-bottom-2",
        "data-[side=bottom]:data-[state=closed]:slide-out-to-top-2",
        "data-[side=left]:data-[state=closed]:slide-out-to-right-2",
        "data-[side=right]:data-[state=closed]:slide-out-to-left-2",
      ],

      slideFade: [
        "data-[state=open]:fade-in-0",
        "data-[state=closed]:fade-out-0",

        "data-[side=top]:data-[state=open]:slide-in-from-bottom-2",
        "data-[side=bottom]:data-[state=open]:slide-in-from-top-2",
        "data-[side=left]:data-[state=open]:slide-in-from-right-2",
        "data-[side=right]:data-[state=open]:slide-in-from-left-2",

        "data-[side=top]:data-[state=closed]:slide-out-to-bottom-2",
        "data-[side=bottom]:data-[state=closed]:slide-out-to-top-2",
        "data-[side=left]:data-[state=closed]:slide-out-to-right-2",
        "data-[side=right]:data-[state=closed]:slide-out-to-left-2",
      ],
    },
  },

  compoundVariants: [
    {
      side: "top",
      animation: ["slide", "slideFade"],
      class: "data-[state=closed]:translate-y-2",
    },
    {
      side: "bottom",
      animation: ["slide", "slideFade"],
      class: "data-[state=closed]:-translate-y-2",
    },
    {
      side: "left",
      animation: ["slide", "slideFade"],
      class: "data-[state=closed]:translate-x-2",
    },
    {
      side: "right",
      animation: ["slide", "slideFade"],
      class: "data-[state=closed]:-translate-x-2",
    },
  ],

  defaultVariants: {
    side: "bottom",
    shadow: "md",
    radius: "md",
    animation: "slideFade",
  },
});

export type PopoverContentVariants = VariantProps<typeof popoverContent>;
