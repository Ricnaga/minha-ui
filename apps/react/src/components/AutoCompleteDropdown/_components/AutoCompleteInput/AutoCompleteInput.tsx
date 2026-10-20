import { Input } from '@/components';
import { AutoCompleteClearButton } from '../AutoCompleteClearButton';
import { useAutoCompleteInput } from './useAutoCompleteInput';

export function AutoCompleteInput() {
  const { inputProps, hasContent } = useAutoCompleteInput();

  return (
    <Input
      {...inputProps}
      endIcon={hasContent ? <AutoCompleteClearButton /> : undefined}
    />
  );
}
