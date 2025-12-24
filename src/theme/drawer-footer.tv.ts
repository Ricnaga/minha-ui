import { tv, type VariantProps } from "tailwind-variants";

export const drawerFooter = tv({
    base: "p-4"
});

export type DrawerFooterVariants = VariantProps<typeof drawerFooter>;
