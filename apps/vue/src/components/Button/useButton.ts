import type { HTMLAttributes } from 'vue';

import { button } from '@/theme';
import type { UseButtonProps } from './button.types';

export function useButton(props: UseButtonProps) {
  // TODO: Implement composable logic
  const buttonProps: HTMLAttributes = {
    class: button({ variant: props.variant }),
  };

  return { buttonProps };
}
