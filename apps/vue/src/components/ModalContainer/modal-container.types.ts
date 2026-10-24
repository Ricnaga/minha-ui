import type { HTMLAttributes } from 'vue';

import type { ModalContainerVariants } from '@/theme';

export type UseModalContainerProps = ModalContainerVariants & /* @vue-ignore */ Omit<HTMLAttributes, 'color'>;

export type ModalContainerProps = UseModalContainerProps;
