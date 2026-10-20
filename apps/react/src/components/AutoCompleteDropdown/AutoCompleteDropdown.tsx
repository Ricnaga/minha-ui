import { Popover } from '@/components';
import { AutoCompleteInput } from './_components/AutoCompleteInput';
import { AutoCompleteList } from './_components/AutoCompleteList';
import { AutoCompleteMultiInput } from './_components/AutoCompleteMultiInput';
import { useAutoCompleteDropdown } from './useAutoCompleteDropdown';

export function AutoCompleteDropdown() {
  const { isOpen, handleOpen, containerRef, isMultiple } =
    useAutoCompleteDropdown();

  return (
    <Popover
      isOpen={isOpen}
      onPopoverChange={handleOpen}
      padding="sm"
      width="trigger"
    >
      <div ref={containerRef}>
        {isMultiple ? <AutoCompleteMultiInput /> : <AutoCompleteInput />}
        <AutoCompleteList />
      </div>
    </Popover>
  );
}
