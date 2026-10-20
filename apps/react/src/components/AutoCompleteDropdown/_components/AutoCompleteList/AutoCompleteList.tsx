import { PopoverContent } from '@/components';
import { autoComplete } from '@/theme';
import { useAutoCompleteList } from './useAutoCompleteList';

const { list, item, empty } = autoComplete();

export function AutoCompleteList() {
  const {
    listRef,
    listId,
    options,
    highlightedIndex,
    getOptionId,
    handleSelect,
    emptyMessage,
    isMultiple,
  } = useAutoCompleteList();

  const hasOptions = options.length > 0;

  return (
    <PopoverContent>
      <ul
        ref={listRef}
        id={listId}
        role="listbox"
        aria-multiselectable={isMultiple || undefined}
        className={list()}
      >
        {hasOptions ? (
          options.map((option, index) => (
            <li
              key={option.key}
              id={getOptionId(index)}
              role="option"
              aria-selected={index === highlightedIndex}
              className={item({ isHighlighted: index === highlightedIndex })}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => handleSelect(option)}
            >
              {option.value}
            </li>
          ))
        ) : (
          <li className={empty()} role="presentation">
            {emptyMessage}
          </li>
        )}
      </ul>
    </PopoverContent>
  );
}
