import { tv, type VariantProps } from "tailwind-variants";

export const errorBoundary = tv({
    base: ""
});

export type ErrorBoundaryVariants = VariantProps<typeof errorBoundary>;
