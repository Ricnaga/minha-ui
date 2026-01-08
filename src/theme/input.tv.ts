import { tv, type VariantProps } from "tailwind-variants";

export const input = tv({
  slots: {
    container: "relative w-full min-w-50 flex items-center h-11",
    startIconWrapper: "absolute left-3 flex items-center pointer-events-none",
    endIconWrapper: "absolute right-3 flex items-center pointer-events-none",
    inputWrapper: "relative flex-1",
    field: [
      "peer w-full bg-transparent focus:outline-none transition-all",
      "disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed",
    ],

    title: [
      "absolute top-2.5 text-sm transition-all",
      "peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm",
      "peer-focus:-top-2.5 peer-focus:text-xs",
      "disabled:text-gray-400",
    ],
  },

  variants: {
    variant: {
      underline: {
        startIconWrapper: "top-1/2 -translate-y-1/2",
        endIconWrapper: "top-1/2 -translate-y-1/2",
        field: [
          "h-full border-b border-sky-200 pt-4 pb-1.5 px-3 text-sm text-sky-700",
          "focus:border-pink-500",
        ],
        title: [
          "text-sky-400",
          "peer-placeholder-shown:text-sky-500",
          "peer-focus:text-pink-500",
          "peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs", // <<< aqui!
        ],
      },
      outline: {
        field: [
          "rounded-md border border-sky-300 p-3 text-sm text-neutral-800 font-medium",
          "focus:border-2 focus:border-pink-500",
        ],
        title: [
          "text-sky-500 bg-white px-1",
          "peer-placeholder-shown:text-sky-500",
          "peer-focus:text-pink-500",
          "peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs",
        ],
      },
    },

    startIcon: {
      true: {
        field: "pl-10", // input com padding para o ícone
        title: [
          "left-10", // posição inicial do label (quando não digitado)
          "peer-placeholder-shown:left-10", // quando placeholder visível, mantém alinhado
          "peer-focus:left-10", // quando foca, ainda mantém alinhado
        ],
      },
      false: {
        field: "pl-3",
        title: ["left-3", "peer-placeholder-shown:left-3", "peer-focus:left-3"],
      },
    },
    endIcon: {
      true: {
        field: "pr-10",
      },
    },
  },

  defaultVariants: {
    variant: "outline",
    startIcon: false,
    endIcon: false,
  },
});

export type InputVariants = VariantProps<typeof input>;
