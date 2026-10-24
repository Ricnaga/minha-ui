import type { HTMLAttributes } from 'vue';

import type { PopoverContentVariants } from '@/theme';

export type UsePopoverContentProps = PopoverContentVariants & /* @vue-ignore */ Omit<HTMLAttributes, 'color'>;

export type PopoverContentProps = UsePopoverContentProps;
