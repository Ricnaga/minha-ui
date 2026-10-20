import { chip, chipClose } from '@/theme';
import type { ButtonHTMLAttributes } from 'react';
import { type ChipProps, type UseChipProps } from './chip.types';

export function useChip(props: UseChipProps) {
  const {
    color = 'primary',
    size = 'medium',
    rounded = 'full',
    className,
    onRemove,
    children,
    ...rest
  } = props;

  const chipProps: ChipProps = {
    ...rest,
    className: chip({ color, rounded, size, className }),
  };

  const hasRemove = Boolean(onRemove);

  const removeButtonProps: ButtonHTMLAttributes<HTMLButtonElement> = {
    type: 'button',
    className: chipClose(),
    'aria-label':
      typeof children === 'string' ? `Remover ${children}` : 'Remover',
    onClick: (event) => {
      event.stopPropagation();
      onRemove?.();
    },
  };

  return { chipProps, children, hasRemove, removeButtonProps };
}
