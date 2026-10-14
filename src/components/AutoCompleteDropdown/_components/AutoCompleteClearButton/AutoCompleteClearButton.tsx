import { XCircleIcon } from '@phosphor-icons/react';
import { useAutoCompleteClearButton } from './useAutoCompleteClearButton';

export function AutoCompleteClearButton() {
  const { clearButtonProps } = useAutoCompleteClearButton();

  return (
    <button {...clearButtonProps}>
      <XCircleIcon />
    </button>
  );
}
