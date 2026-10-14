import { useContext, useDisclosure } from '@/hooks';
import {
  createContext,
  useCallback,
  useId,
  useMemo,
  useState,
  type KeyboardEvent,
} from 'react';
import type { SelectOptions } from '../Select';
import type {
  AutoCompleteProviderContextProps,
  UseAutoCompleteProviderProps,
} from './auto-complete-provider.types';

const DEFAULT_EMPTY_MESSAGE = 'Nenhum resultado encontrado';

function defaultFilter(option: SelectOptions, query: string) {
  return option.value.toLowerCase().includes(query.toLowerCase());
}

export const AutoCompleteProviderContext =
  createContext<AutoCompleteProviderContextProps>(
    {} as AutoCompleteProviderContextProps,
  );

export function useAutoCompleteProvider(props: UseAutoCompleteProviderProps) {
  const {
    options,
    value,
    defaultValue = '',
    onInputChange,
    isMultiple = false,
    values,
    defaultValues,
    onValuesChange,
    onSelect,
    filter = defaultFilter,
    emptyMessage = DEFAULT_EMPTY_MESSAGE,
    placeholder,
    isDisabled = false,
    children,
  } = props;

  const { isOpen, handleOpen, handleClose } = useDisclosure();
  const [internalQuery, setInternalQuery] = useState(
    isMultiple ? '' : defaultValue,
  );
  const [internalValues, setInternalValues] = useState<SelectOptions[]>(
    defaultValues ?? [],
  );
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const autoCompleteId = useId();
  const inputId = `${autoCompleteId}-input`;
  const listId = `${autoCompleteId}-listbox`;

  const isControlledQuery = !isMultiple && value !== undefined;
  const inputValue = isControlledQuery ? value : internalQuery;

  const selectedOptions = useMemo(
    () => (isMultiple ? (values ?? internalValues) : []),
    [isMultiple, values, internalValues],
  );

  const selectedKeys = useMemo(
    () => new Set(selectedOptions.map((option) => option.key.toString())),
    [selectedOptions],
  );

  const isSelected = useCallback(
    (option: SelectOptions) => selectedKeys.has(option.key.toString()),
    [selectedKeys],
  );

  const filteredOptions = useMemo(() => {
    const matchingQuery = options.filter((option) =>
      filter(option, inputValue),
    );

    if (!isMultiple) return matchingQuery;

    return matchingQuery.filter(
      (option) => !selectedKeys.has(option.key.toString()),
    );
  }, [options, inputValue, filter, isMultiple, selectedKeys]);

  const hasContent = inputValue.length > 0 || selectedOptions.length > 0;

  function getOptionId(index: number) {
    return `${listId}-option-${index}`;
  }

  function setQuery(nextValue: string) {
    if (!isControlledQuery) setInternalQuery(nextValue);
    onInputChange?.(nextValue);
  }

  function commitValues(nextValues: SelectOptions[]) {
    if (!isMultiple) return;
    if (values === undefined) setInternalValues(nextValues);
    onValuesChange?.(nextValues);
  }

  function open() {
    if (!isDisabled) handleOpen();
  }

  function close() {
    handleClose();
    setHighlightedIndex(-1);
  }

  function handleInputChange(nextValue: string) {
    setQuery(nextValue);
    setHighlightedIndex(nextValue ? 0 : -1);
    open();
  }

  function handleSelect(option: SelectOptions) {
    if (isMultiple) {
      if (isSelected(option)) return;

      commitValues([...selectedOptions, option]);
      onSelect?.(option);
      setQuery('');
      setHighlightedIndex(-1);
      open();
      return;
    }

    setQuery(option.value);
    onSelect?.(option);
    close();
  }

  function removeValue(option: SelectOptions) {
    commitValues(
      selectedOptions.filter(
        (selected) => selected.key.toString() !== option.key.toString(),
      ),
    );
  }

  function handleClear() {
    setQuery('');
    setHighlightedIndex(-1);

    if (isMultiple) commitValues([]);
  }

  function moveHighlight(step: number) {
    if (filteredOptions.length === 0) return;

    setHighlightedIndex((prev) => {
      const next = prev + step;

      if (next < 0) return filteredOptions.length - 1;
      if (next >= filteredOptions.length) return 0;

      return next;
    });
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (!isOpen) {
        open();
        setHighlightedIndex(0);
        return;
      }
      moveHighlight(1);
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      moveHighlight(-1);
      return;
    }

    if (event.key === 'Enter') {
      const option = filteredOptions[highlightedIndex];
      if (isOpen && option) {
        event.preventDefault();
        handleSelect(option);
      }
      return;
    }

    if (event.key === 'Escape') close();
  }

  return {
    isOpen,
    handleOpen: open,
    handleClose: close,
    inputValue,
    handleInputChange,
    filteredOptions,
    highlightedIndex,
    handleSelect,
    handleKeyDown,
    inputId,
    listId,
    getOptionId,
    emptyMessage,
    placeholder,
    isDisabled,
    isMultiple,
    selectedOptions,
    isSelected,
    removeValue,
    handleClear,
    hasContent,
    children,
  };
}

export function useAutoCompleteContext() {
  return useContext<AutoCompleteProviderContextProps>({
    context: AutoCompleteProviderContext,
    hookName: useAutoCompleteProvider.name,
    providerName: AutoCompleteProviderContext.name,
  });
}
