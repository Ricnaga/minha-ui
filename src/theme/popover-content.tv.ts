import { tv, type VariantProps } from "tailwind-variants";

export const popoverContent = tv({
  base: [
    "absolute z-50 p-2",
    "bg-white",
    "outline-none",
    "will-change-[transform,opacity] ",
    "transform-gpu",
    "data-[state=closed]:opacity-0",
    "data-[state=closed]:pointer-events-none",
  ],

  variants: {
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },

    shadow: {
      none: "shadow-none",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
    },

    animation: {
      none: "",
      fade: "",
      slide: "",
      slideFade: "",
    },

    side: {
      top: "",
      bottom: "",
      left: "",
      right: "",
    },
  },

  compoundVariants: [
    // FADE
    {
      animation: "fade",
      class: `
        data-[state=open]:fade-in
        data-[state=open]:duration-200
        data-[state=open]:ease-out

        data-[state=closed]:fade-out
        data-[state=closed]:duration-150
        data-[state=closed]:ease-in
      `,
    },

    // SLIDE puro - bottom
    {
      animation: "slide",
      side: "bottom",
      class: `
        data-[state=open]:slide-in-from-top
        data-[state=open]:duration-200
        data-[state=open]:ease-out

        data-[state=closed]:slide-out-to-top
        data-[state=closed]:duration-150
        data-[state=closed]:ease-in
      `,
    },

    // SLIDE puro - top
    {
      animation: "slide",
      side: "top",
      class: `
        data-[state=open]:slide-in-from-bottom
        data-[state=open]:duration-200
        data-[state=open]:ease-out

        data-[state=closed]:slide-out-to-bottom
        data-[state=closed]:duration-150
        data-[state=closed]:ease-in
      `,
    },

    // SLIDE puro - left
    {
      animation: "slide",
      side: "left",
      class: `
        data-[state=open]:slide-in-from-right
        data-[state=open]:duration-200
        data-[state=open]:ease-out

        data-[state=closed]:slide-out-to-right
        data-[state=closed]:duration-150
        data-[state=closed]:ease-in
      `,
    },

    // SLIDE puro - right
    {
      animation: "slide",
      side: "right",
      class: `
        data-[state=open]:slide-in-from-left
        data-[state=open]:duration-200
        data-[state=open]:ease-out

        data-[state=closed]:slide-out-to-left
        data-[state=closed]:duration-150
        data-[state=closed]:ease-in
      `,
    },

    // SLIDE + FADE - bottom
    {
      animation: "slideFade",
      side: "bottom",
      class: `
        data-[state=open]:slide-in-from-top
        data-[state=open]:fade-in
        data-[state=open]:duration-200
        data-[state=open]:ease-out

        data-[state=closed]:slide-out-to-top
        data-[state=closed]:fade-out
        data-[state=closed]:duration-150
        data-[state=closed]:ease-in
      `,
    },

    // SLIDE + FADE - top
    {
      animation: "slideFade",
      side: "top",
      class: `
        data-[state=open]:slide-in-from-bottom
        data-[state=open]:fade-in
        data-[state=open]:duration-200
        data-[state=open]:ease-out

        data-[state=closed]:slide-out-to-bottom
        data-[state=closed]:fade-out
        data-[state=closed]:duration-150
        data-[state=closed]:ease-in
      `,
    },

    // SLIDE + FADE - left
    {
      animation: "slideFade",
      side: "left",
      class: `
        data-[state=open]:slide-in-from-right
        data-[state=open]:fade-in
        data-[state=open]:duration-200
        data-[state=open]:ease-out

        data-[state=closed]:slide-out-to-right
        data-[state=closed]:fade-out
        data-[state=closed]:duration-150
        data-[state=closed]:ease-in
      `,
    },

    // SLIDE + FADE - right
    {
      animation: "slideFade",
      side: "right",
      class: `
        data-[state=open]:slide-in-from-left
        data-[state=open]:fade-in
        data-[state=open]:duration-200
        data-[state=open]:ease-out

        data-[state=closed]:slide-out-to-left
        data-[state=closed]:fade-out
        data-[state=closed]:duration-150
        data-[state=closed]:ease-in
      `,
    },
  ],

  defaultVariants: {
    rounded: "md",
    shadow: "md",
    animation: "slideFade",
    side: "bottom",
  },
});

export type PopoverContentVariants = VariantProps<typeof popoverContent>;
