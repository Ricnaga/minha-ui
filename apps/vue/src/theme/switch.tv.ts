import { tv } from 'tailwind-variants';

export const switchControl = tv({
  slots: {
    container: 'inline-flex items-center gap-2 cursor-pointer select-none',
    track: [
      'appearance-none relative inline-block shrink-0 rounded-full bg-neutral-300',
      'transition-colors duration-300 cursor-pointer',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-60',
      "after:content-[''] after:absolute after:top-0.5 after:left-0.5",
      'after:rounded-full after:bg-white after:shadow-sm',
      'after:transition-transform after:duration-300',
    ],
    label: 'text-neutral-800',
  },

  variants: {
    size: {
      small: {
        track: 'w-9 h-5 after:size-4 checked:after:translate-x-4',
        label: 'text-xs',
      },
      medium: {
        track: 'w-11 h-6 after:size-5 checked:after:translate-x-5',
        label: 'text-sm',
      },
    },

    color: {
      primary: { track: 'checked:bg-sky-500' },
      secondary: { track: 'checked:bg-pink-500' },
      success: { track: 'checked:bg-emerald-500' },
      info: { track: 'checked:bg-blue-500' },
      warning: { track: 'checked:bg-amber-500' },
      error: { track: 'checked:bg-red-500' },
    },

    disabled: {
      true: {
        container: 'cursor-not-allowed',
        label: 'text-neutral-400',
      },
    },
  },

  defaultVariants: {
    size: 'medium',
    color: 'primary',
    disabled: false,
  },
});


export type SwitchSize = keyof typeof switchControl.variants.size;
export type SwitchColor = keyof typeof switchControl.variants.color;

export type SwitchVariants = {
  size?: SwitchSize;
  color?: SwitchColor;
};
