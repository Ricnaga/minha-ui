import type { HTMLAttributes } from 'vue';

import type { ModalHeaderVariants } from '@/theme';

export type UseModalHeaderProps = ModalHeaderVariants & /* @vue-ignore */ Omit<HTMLAttributes, 'color'>;

export type ModalHeaderProps = UseModalHeaderProps;
