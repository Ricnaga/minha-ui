import type { InputProps } from '@/components';
import type { KeyboardEvent } from 'react';
import { useAutoCompleteContext } from '../../../AutoCompleteProvider/useAutoCompleteProvider';

export function useAutoCompleteInput() {
  const {
    inputId,
    listId,
    inputValue,
    handleInputChange,
    handleKeyDown,
    handleOpen,
    isOpen,
    highlightedIndex,
    getOptionId,
    placeholder,
    isDisabled,
    hasContent,
  } = useAutoCompleteContext();

  const inputProps: InputProps = {
    id: inputId,
    role: 'combobox',
    autoComplete: 'off',
    value: inputValue,
    placeholder,
    disabled: isDisabled,
    'aria-expanded': isOpen,
    'aria-controls': listId,
    'aria-autocomplete': 'list',
    'aria-activedescendant':
      highlightedIndex >= 0 ? getOptionId(highlightedIndex) : undefined,
    onChange: (event) => handleInputChange(event.target.value),
    onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => handleKeyDown(event),
    onFocus: () => handleOpen(),
  };

  return { inputProps, hasContent };
}
