import { tv, type VariantProps } from "tailwind-variants";

export const popoverContent = tv({
  base: [
    "absolute z-50 bg-white",
    "data-[state=open]:animate-in",
    "data-[state=closed]:animate-out",
    "duration-200 ease-out",
    "data-[state=closed]:opacity-0",
  ],

  variants: {
    side: {
      top: "bottom-full left-1/2 -translate-x-1/2 origin-bottom",
      bottom: "top-full left-1/2 -translate-x-1/2 origin-top",
      left: "right-full top-1/2 -translate-y-1/2 origin-right",
      right: "left-full top-1/2 -translate-y-1/2 origin-left",
    },

    offset: {
      sm: "",
      md: "",
      lg: "",
    },

    width: {
      auto: "",
      trigger: "w-full",
      sm: "w-48",
      md: "w-64",
      lg: "w-80",
    },

    padding: {
      sm: "p-2",
      md: "p-3",
      lg: "p-4",
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
      fade: ["data-[state=open]:fade-in", "data-[state=closed]:fade-out"],
      slide: "",
      slideFade: [
        "data-[state=open]:fade-in",
        "data-[state=open]:zoom-in",
        "data-[state=closed]:fade-out",
        "data-[state=closed]:zoom-out",
      ],
    },
  },

  compoundVariants: [
    // TOP
    {
      animation: "slide",
      side: "top",
      class: [
        "data-[state=open]:slide-in-from-bottom",
        "data-[state=closed]:slide-out-to-bottom",
      ],
    },
    {
      animation: "slideFade",
      side: "top",
      class: [
        "data-[state=open]:slide-in-from-bottom",
        "data-[state=closed]:slide-out-to-bottom",
      ],
    },

    // BOTTOM
    {
      animation: "slide",
      side: "bottom",
      class: [
        "data-[state=open]:slide-in-from-top",
        "data-[state=closed]:slide-out-to-top",
      ],
    },
    {
      animation: "slideFade",
      side: "bottom",
      class: [
        "data-[state=open]:slide-in-from-top",
        "data-[state=closed]:slide-out-to-top",
      ],
    },

    // LEFT
    {
      animation: "slide",
      side: "left",
      class: [
        "data-[state=open]:slide-in-from-right",
        "data-[state=closed]:slide-out-to-right",
      ],
    },
    {
      animation: "slideFade",
      side: "left",
      class: [
        "data-[state=open]:slide-in-from-right",
        "data-[state=closed]:slide-out-to-right",
      ],
    },

    // RIGHT
    {
      animation: "slide",
      side: "right",
      class: [
        "data-[state=open]:slide-in-from-left",
        "data-[state=closed]:slide-out-to-left",
      ],
    },
    {
      animation: "slideFade",
      side: "right",
      class: [
        "data-[state=open]:slide-in-from-left",
        "data-[state=closed]:slide-out-to-left",
      ],
    },

    // OFFSET — aplicado por side
    {
      side: "top",
      offset: "sm",
      class: "mb-1",
    },
    {
      side: "top",
      offset: "md",
      class: "mb-2",
    },
    {
      side: "top",
      offset: "lg",
      class: "mb-3",
    },

    {
      side: "bottom",
      offset: "sm",
      class: "mt-1",
    },
    {
      side: "bottom",
      offset: "md",
      class: "mt-2",
    },
    {
      side: "bottom",
      offset: "lg",
      class: "mt-3",
    },

    {
      side: "left",
      offset: "sm",
      class: "mr-1",
    },
    {
      side: "left",
      offset: "md",
      class: "mr-2",
    },
    {
      side: "left",
      offset: "lg",
      class: "mr-3",
    },

    {
      side: "right",
      offset: "sm",
      class: "ml-1",
    },
    {
      side: "right",
      offset: "md",
      class: "ml-2",
    },
    {
      side: "right",
      offset: "lg",
      class: "ml-3",
    },
  ],

  defaultVariants: {
    side: "bottom",
    offset: "md",
    width: "auto",
    padding: "md",
    shadow: "md",
    radius: "md",
    animation: "slideFade",
  },
});

export type PopoverContentVariants = VariantProps<typeof popoverContent>;
