import { Chip } from '@/components';
import { autoComplete } from '@/theme';
import { AutoCompleteClearButton } from '../AutoCompleteClearButton';
import { useAutoCompleteMultiInput } from './useAutoCompleteMultiInput';

const { multiField, multiInput } = autoComplete();

export function AutoCompleteMultiInput() {
  const {
    selectedOptions,
    removeValue,
    hasContent,
    inputProps,
    inputRef,
    focusInput,
  } = useAutoCompleteMultiInput();

  return (
    <div className={multiField()} onClick={focusInput}>
      {selectedOptions.map((option) => (
        <Chip key={option.key} onRemove={() => removeValue(option)}>
          {option.value}
        </Chip>
      ))}

      <input ref={inputRef} {...inputProps} className={multiInput()} />

      {hasContent && <AutoCompleteClearButton />}
    </div>
  );
}
