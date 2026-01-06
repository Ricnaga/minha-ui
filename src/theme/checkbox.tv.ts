import { tv, type VariantProps } from "tailwind-variants";

export const checkbox = tv({
  base: [
    "appearance-none",
    "w-5 h-5 outline-0 inline-block align-top relative m-0 cursor-pointer",
    "border border-neutral-400 checked:border-sky-500",
    "bg-white checked:bg-sky-500",
    "transition-all duration-300",
    "after:content-[''] after:block after:absolute after:left-2 after:top-1",
    "after:w-1 after:h-2 after:border-2 after:border-white after:border-t-0 after:border-l-0",
    "after:rotate-45 after:checked:rotate-20",
    "after:transition-transform after:duration-300 after:ease-in-out",
    "checked:after:transition-all checked:after:duration-600 checked:after:ease-out",
    "hover:enabled:not-checked:border-sky-500",
    "focus:ring-1 focus:ring-sky-500/30",
    "rounded-md",
  ],
  variants: {
    variant: {
      glow: "",
    },
    disabled: {
      true: [
        "cursor-not-allowed opacity-90",
        "disabled:bg-neutral-600 disabled:checked:bg-sky-200 disabled:checked:border-sky-400/20",
      ],
    },
    indeterminate: {
      true: [
        // cria um “traço” no centro do checkbox
        "after:content-[''] after:block after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-2 after:h-0.5 after:bg-white",
        "after:rotate-0",
        "bg-sky-500 border-sky-500",
      ],
    },
  },
  defaultVariants: {
    variant: "glow",
    disabled: false,
    indeterminate: false,
  },
});

export type CheckboxVariants = VariantProps<typeof checkbox>;
