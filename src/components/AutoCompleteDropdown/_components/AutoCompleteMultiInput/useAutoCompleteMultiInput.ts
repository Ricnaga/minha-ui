import { useRef } from 'react';
import { useAutoCompleteContext } from '../../../AutoCompleteProvider/useAutoCompleteProvider';
import { useAutoCompleteInput } from '../AutoCompleteInput/useAutoCompleteInput';

export function useAutoCompleteMultiInput() {
  const { selectedOptions, removeValue } = useAutoCompleteContext();
  const { inputProps, hasContent } = useAutoCompleteInput();

  const inputRef = useRef<HTMLInputElement>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  return {
    selectedOptions,
    removeValue,
    hasContent,
    inputProps,
    inputRef,
    focusInput,
  };
}
