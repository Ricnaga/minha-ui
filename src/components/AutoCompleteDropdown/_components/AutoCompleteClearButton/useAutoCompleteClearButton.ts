import { autoComplete } from '@/theme';
import type { ButtonHTMLAttributes } from 'react';
import { useAutoCompleteContext } from '../../../AutoCompleteProvider/useAutoCompleteProvider';

const { clearButton } = autoComplete();

export function useAutoCompleteClearButton() {
  const { handleClear } = useAutoCompleteContext();

  const clearButtonProps: ButtonHTMLAttributes<HTMLButtonElement> = {
    type: 'button',
    'aria-label': 'Limpar',
    className: clearButton(),
    onClick: handleClear,
  };

  return { clearButtonProps };
}
