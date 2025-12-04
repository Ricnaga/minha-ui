import { tv, type VariantProps } from "tailwind-variants";

export const checkbox = tv({
  base: [
    "appearance-none",
    "w-5 h-5 outline-0 inline-block align-top relative m-0 cursor-pointer",
    "border border-neutral-400 checked:border-sky-500",
    "bg-white checked:bg-sky-500",
    "transition-all duration-300",
    "after:content-[''] after:block after:absolute after:left-0 after:top-0",
    "after:[transition:transform_0.3s_ease,opacity_0.2s]",

    "checked:after:transition-all checked:after:duration-600 checked:after:ease-out",

    "disabled:cursor-not-allowed disabled:opacity-90 disabled:bg-neutral-600",
    "disabled:checked:bg-sky-200 disabled:checked:border-sky-400/20",
    "hover:enabled:not-checked:border-sky-500",

    "focus:ring-1 focus:ring-sky-500/30",

    "rounded-md",
    "after:w-1 after:h-2",
    "after:border-2 after:border-white after:border-t-0 after:border-l-0 after:left-2 after:top-1",
    "after:rotate-45 after:checked:rotate-20",
  ],
});

export type CheckboxVariantsProps = VariantProps<typeof checkbox>;
