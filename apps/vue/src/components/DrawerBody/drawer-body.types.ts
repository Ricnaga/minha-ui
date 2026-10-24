import type { HTMLAttributes } from 'vue';

import type { DrawerBodyVariants } from '@/theme';

export type UseDrawerBodyProps = DrawerBodyVariants & /* @vue-ignore */ Omit<HTMLAttributes, 'color'>;

export type DrawerBodyProps = UseDrawerBodyProps;
