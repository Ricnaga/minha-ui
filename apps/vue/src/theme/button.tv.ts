import { tv } from 'tailwind-variants';

// As variantes são a fonte única da verdade: o tipo de props do componente é
// derivado delas para que o compilador do SFC consiga resolvê-lo.
export const buttonVariants = {
  variant: {
    primary: '',
    secondary: '',
  },
};

export const button = tv({
  base: '',
  variants: buttonVariants,
});

export type ButtonVariants = {
  variant?: keyof typeof buttonVariants.variant;
};
