import { useEffect, useRef } from 'react';
import { useAutoCompleteContext } from '../../../AutoCompleteProvider/useAutoCompleteProvider';

export function useAutoCompleteList() {
  const {
    listId,
    filteredOptions,
    highlightedIndex,
    getOptionId,
    handleSelect,
    emptyMessage,
    isMultiple,
  } = useAutoCompleteContext();

  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (highlightedIndex < 0) return;

    const option = listRef.current?.children[highlightedIndex] as
      | HTMLElement
      | undefined;
    option?.scrollIntoView?.({ block: 'nearest' });
  }, [highlightedIndex]);

  return {
    listRef,
    listId,
    options: filteredOptions,
    highlightedIndex,
    getOptionId,
    handleSelect,
    emptyMessage,
    isMultiple,
  };
}
