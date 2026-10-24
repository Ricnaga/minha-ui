import type { HTMLAttributes } from 'vue';

import type { DrawerFooterVariants } from '@/theme';

export type UseDrawerFooterProps = DrawerFooterVariants & /* @vue-ignore */ Omit<HTMLAttributes, 'color'>;

export type DrawerFooterProps = UseDrawerFooterProps;
