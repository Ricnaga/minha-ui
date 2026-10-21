import type { HTMLAttributes } from 'svelte/elements';

import { button } from '@/theme';
import type { UseButtonProps } from './button.types';

export function useButton(props: UseButtonProps) {
  // TODO: Implement rune logic
  const buttonProps: HTMLAttributes<HTMLDivElement> = {
    class: button({ variant: props.variant }),
  };

  return { buttonProps };
}
