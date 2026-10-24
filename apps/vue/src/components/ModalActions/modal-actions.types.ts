import type { HTMLAttributes } from 'vue';

import type { ModalActionsVariants } from '@/theme';

export type UseModalActionsProps = ModalActionsVariants & /* @vue-ignore */ Omit<HTMLAttributes, 'color'>;

export type ModalActionsProps = UseModalActionsProps;
