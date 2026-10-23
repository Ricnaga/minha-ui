import type { HTMLImgAttributes } from 'svelte/elements';

import type { CardImageVariants } from '@/theme';

export interface UseCardImageProps
  extends
    Omit<HTMLImgAttributes, 'class' | 'rounded' | 'aspect'>,
    CardImageVariants {
  class?: string;
}

export type CardImageProps = UseCardImageProps;
