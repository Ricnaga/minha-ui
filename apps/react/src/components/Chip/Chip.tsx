import { XIcon } from '@phosphor-icons/react';
import type { ChipProps } from './chip.types';
import { useChip } from './useChip';

export function Chip(props: ChipProps) {
  const { chipProps, children, hasRemove, removeButtonProps } = useChip(props);

  return (
    <span {...chipProps}>
      {children}
      {hasRemove && (
        <button {...removeButtonProps}>
          <XIcon />
        </button>
      )}
    </span>
  );
}
