import { tv } from "tailwind-variants";

export const progress = tv({
  base: [
    "block w-full min-w-20 h-1.5 rounded-full relative bg-black/20",
    "before:content-[''] before:absolute before:bg-sky-600",
    "before:inset-0 before:w-0 before:h-full before:rounded-full before:animate-[moving_1s_ease-in-out_infinite]",
  ],
});

const progressSheet = new CSSStyleSheet();

progressSheet.replaceSync(`
      @keyframes moving {
        50% {
          width: 100%;
        }
        100% {
          width: 0;
          right: 0;
          left: unset;
        }
      }
    `);

export { progressSheet };
