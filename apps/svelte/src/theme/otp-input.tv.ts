import { tv, type VariantProps } from 'tailwind-variants';

export const otpInput = tv({
  slots: {
    container: 'flex items-center gap-2',
    field: [
      'w-11 h-12 text-center text-lg font-medium',
      'rounded-md border border-sky-300 bg-white text-neutral-800',
      'outline-none transition-all',
      'focus:border-2 focus:border-pink-500',
      'disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400',
    ],
  },

  variants: {
    isInvalid: {
      true: { field: 'border-red-500 focus:border-red-500' },
    },
    disabled: {
      true: { container: 'opacity-70' },
    },
  },

  defaultVariants: {
    isInvalid: false,
    disabled: false,
  },
});

export type OtpInputVariants = VariantProps<typeof otpInput>;
