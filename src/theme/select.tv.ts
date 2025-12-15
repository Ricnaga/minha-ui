import { tv, type VariantProps } from "tailwind-variants";

export const select = tv({
  slots: {
    container: "flex-auto flex flex-col items-center h-64",
    wrapper: "flex flex-col items-center relative w-full max-w-sm",

    inputWrapper: "w-full",
    inputInnerWrapper: "my-2 bg-white p-1 flex border border-neutral-400 rounded-lg",
    input: "p-1 px-2 appearance-none outline-none w-full text-neutral-800",
    clearButton:
      "cursor-pointer w-6 h-full flex items-center text-neutral-800 m-auto hover:text-sky-800",

    toggleWrapper:
      "text-sky-600 w-8 py-1 pl-2 pr-1 border-l flex items-center border-neutral-300",
    toggleButton: "cursor-pointer size-6 text-neutral-800 hover:text-sky-800",

    dropdownWrapper:
      "absolute top-full z-40 w-full rounded-md shadow-md max-h-75 overflow-y-auto bg-white",
    dropdown: "flex flex-col w-full",

    itemWrapper:
      "cursor-pointer w-full border-b border-neutral-100 hover:bg-sky-600 hover:text-sky-100",
    itemInnerWrapper: "flex w-full items-center p-2 pl-2 border-l-2",
    item: "mx-2 leading-6",
  },
  variants: {
    isSelected: {
      true: {
        itemInnerWrapper: "border-sky-600 bg-sky-50 hover:text-sky-500",
      },
      false: {
        itemInnerWrapper: "border-transparent",
      },
    },
  },
  defaultVariants: {
    isSelected: false,
  },
});

export type SelectVariantProps = VariantProps<typeof select>;
