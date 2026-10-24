import type { HTMLAttributes } from 'vue';

import type { DrawerContainerVariants } from '@/theme';

export type UseDrawerContainerProps = /* @vue-ignore */ Omit<HTMLAttributes, 'color'> & DrawerContainerVariants;

export type DrawerContainerProps = UseDrawerContainerProps;
