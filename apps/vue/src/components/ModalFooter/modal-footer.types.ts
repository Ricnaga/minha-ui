import type { HTMLAttributes } from 'vue';

import type { ModalFooterVariants } from '@/theme';

export type UseModalFooterProps = ModalFooterVariants & /* @vue-ignore */ Omit<HTMLAttributes, 'color'>;

export type ModalFooterProps = UseModalFooterProps;
