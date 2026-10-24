import type { HTMLAttributes } from 'vue';

import type { DrawerHeaderVariants } from '@/theme';

export type UseDrawerHeaderProps = DrawerHeaderVariants & /* @vue-ignore */ Omit<HTMLAttributes, 'color'>;

export type DrawerHeaderProps = UseDrawerHeaderProps;
