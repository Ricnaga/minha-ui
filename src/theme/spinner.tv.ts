import { tv } from "tailwind-variants";

export const spinner = tv({
  slots: {
    container: "fixed inset-0 z-50 flex items-center justify-center",
    wrapper: "w-14 origin-center animate-spin",
    icon: [
      "fill-none stroke-sky-600 stroke-[10px]  animate-[dash_1.5s_ease-in-out_infinite]",
      "[stroke-dasharray:2,200] [stroke-dashoffset:0] [stroke-linecap:round]",
    ],
  },
});
const spinnerSheet = new CSSStyleSheet();

spinnerSheet.replaceSync(`
      @keyframes dash {
        0%   { stroke-dasharray: 1 200; stroke-dashoffset: 0; }
        50%  { stroke-dasharray: 90 200; stroke-dashoffset: 0; }
        100% { stroke-dashoffset: -125px; }
      }
    `);

export { spinnerSheet };
