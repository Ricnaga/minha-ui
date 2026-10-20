import { act, renderHook } from '@testing-library/react';
import type { KeyboardEvent } from 'react';
import type { SelectOptions } from '../../Select';
import { useAutoCompleteProvider } from '../useAutoCompleteProvider';

const OPTIONS: SelectOptions[] = [
  { key: '1', value: 'Banana' },
  { key: '2', value: 'Maçã' },
  { key: '3', value: 'Laranja' },
];

const keyEvent = (key: string) =>
  ({
    key,
    preventDefault: vi.fn(),
  }) as unknown as KeyboardEvent<HTMLInputElement>;

describe('useAutoCompleteProvider', () => {
  it('should start empty and keep every option available', () => {
    const { result } = renderHook(() =>
      useAutoCompleteProvider({ options: OPTIONS, children: null }),
    );

    expect(result.current.inputValue).toBe('');
    expect(result.current.filteredOptions).toEqual(OPTIONS);
    expect(result.current.highlightedIndex).toBe(-1);
    expect(result.current.isOpen).toBe(false);
  });

  it('should filter options as the query changes', () => {
    const { result } = renderHook(() =>
      useAutoCompleteProvider({ options: OPTIONS, children: null }),
    );

    act(() => result.current.handleInputChange('an'));

    expect(result.current.filteredOptions).toEqual([OPTIONS[0], OPTIONS[2]]);
    expect(result.current.highlightedIndex).toBe(0);
    expect(result.current.isOpen).toBe(true);
  });

  it('should support a custom filter', () => {
    const { result } = renderHook(() =>
      useAutoCompleteProvider({
        options: OPTIONS,
        children: null,
        filter: (option, query) => option.value.startsWith(query),
      }),
    );

    act(() => result.current.handleInputChange('Ma'));

    expect(result.current.filteredOptions).toEqual([OPTIONS[1]]);
  });

  it('should emit the typed value through onInputChange', () => {
    const handleInputChange = vi.fn();
    const { result } = renderHook(() =>
      useAutoCompleteProvider({
        options: OPTIONS,
        children: null,
        onInputChange: handleInputChange,
      }),
    );

    act(() => result.current.handleInputChange('ba'));

    expect(handleInputChange).toHaveBeenCalledWith('ba');
    expect(result.current.inputValue).toBe('ba');
  });

  it('should keep the input controlled when value is provided', () => {
    const handleInputChange = vi.fn();
    const { result } = renderHook(() =>
      useAutoCompleteProvider({
        options: OPTIONS,
        children: null,
        value: 'Ma',
        onInputChange: handleInputChange,
      }),
    );

    expect(result.current.inputValue).toBe('Ma');
    expect(result.current.filteredOptions).toEqual([OPTIONS[1]]);

    act(() => result.current.handleInputChange('Maç'));

    expect(handleInputChange).toHaveBeenCalledWith('Maç');
    expect(result.current.inputValue).toBe('Ma');
  });

  it('should select an option, fill the value and close', () => {
    const handleSelect = vi.fn();
    const { result } = renderHook(() =>
      useAutoCompleteProvider({
        options: OPTIONS,
        children: null,
        onSelect: handleSelect,
      }),
    );

    act(() => result.current.handleInputChange('ba'));
    act(() => result.current.handleSelect(OPTIONS[0]));

    expect(handleSelect).toHaveBeenCalledWith(OPTIONS[0]);
    expect(result.current.inputValue).toBe('Banana');
    expect(result.current.isOpen).toBe(false);
    expect(result.current.highlightedIndex).toBe(-1);
  });

  it('should open and highlight the first option on ArrowDown when closed', () => {
    const { result } = renderHook(() =>
      useAutoCompleteProvider({ options: OPTIONS, children: null }),
    );

    const event = keyEvent('ArrowDown');
    act(() => result.current.handleKeyDown(event));

    expect(event.preventDefault).toHaveBeenCalled();
    expect(result.current.isOpen).toBe(true);
    expect(result.current.highlightedIndex).toBe(0);
  });

  it('should cycle the highlight with the arrow keys', () => {
    const { result } = renderHook(() =>
      useAutoCompleteProvider({ options: OPTIONS, children: null }),
    );

    act(() => result.current.handleInputChange(''));
    act(() => result.current.handleKeyDown(keyEvent('ArrowUp')));

    expect(result.current.highlightedIndex).toBe(OPTIONS.length - 1);

    act(() => result.current.handleKeyDown(keyEvent('ArrowDown')));

    expect(result.current.highlightedIndex).toBe(0);
  });

  it('should select the highlighted option on Enter', () => {
    const handleSelect = vi.fn();
    const { result } = renderHook(() =>
      useAutoCompleteProvider({
        options: OPTIONS,
        children: null,
        onSelect: handleSelect,
      }),
    );

    act(() => result.current.handleInputChange('an'));
    act(() => result.current.handleKeyDown(keyEvent('ArrowDown')));
    act(() => result.current.handleKeyDown(keyEvent('Enter')));

    expect(handleSelect).toHaveBeenCalledWith(OPTIONS[2]);
    expect(result.current.inputValue).toBe('Laranja');
  });

  it('should close and reset the highlight on Escape', () => {
    const { result } = renderHook(() =>
      useAutoCompleteProvider({ options: OPTIONS, children: null }),
    );

    act(() => result.current.handleInputChange('ba'));
    act(() => result.current.handleKeyDown(keyEvent('Escape')));

    expect(result.current.isOpen).toBe(false);
    expect(result.current.highlightedIndex).toBe(-1);
  });

  it('should not open when disabled', () => {
    const { result } = renderHook(() =>
      useAutoCompleteProvider({
        options: OPTIONS,
        children: null,
        isDisabled: true,
      }),
    );

    act(() => result.current.handleInputChange('ba'));

    expect(result.current.isOpen).toBe(false);
  });

  it('should expose ids for the combobox and listbox', () => {
    const { result } = renderHook(() =>
      useAutoCompleteProvider({ options: OPTIONS, children: null }),
    );

    expect(result.current.inputId).toBeTruthy();
    expect(result.current.listId).toBeTruthy();
    expect(result.current.getOptionId(0)).toBe(
      `${result.current.listId}-option-0`,
    );
  });

  it('should report hasContent from the query', () => {
    const { result } = renderHook(() =>
      useAutoCompleteProvider({ options: OPTIONS, children: null }),
    );

    expect(result.current.hasContent).toBe(false);

    act(() => result.current.handleInputChange('ba'));

    expect(result.current.hasContent).toBe(true);
  });

  describe('modo múltiplo', () => {
    it('should add a value and emit onValuesChange', () => {
      const handleValuesChange = vi.fn();
      const { result } = renderHook(() =>
        useAutoCompleteProvider({
          options: OPTIONS,
          isMultiple: true,
          onValuesChange: handleValuesChange,
          children: null,
        }),
      );

      act(() => result.current.handleSelect(OPTIONS[0]));

      expect(handleValuesChange).toHaveBeenCalledWith([OPTIONS[0]]);
      expect(result.current.selectedOptions).toEqual([OPTIONS[0]]);
      expect(result.current.inputValue).toBe('');
      expect(result.current.isOpen).toBe(true);
    });

    it('should hide the selected options from the list', () => {
      const { result } = renderHook(() =>
        useAutoCompleteProvider({
          options: OPTIONS,
          isMultiple: true,
          defaultValues: [OPTIONS[0]],
          children: null,
        }),
      );

      expect(result.current.filteredOptions).toEqual([OPTIONS[1], OPTIONS[2]]);
      expect(result.current.isSelected(OPTIONS[0])).toBe(true);
    });

    it('should ignore selecting an option already selected', () => {
      const handleValuesChange = vi.fn();
      const { result } = renderHook(() =>
        useAutoCompleteProvider({
          options: OPTIONS,
          isMultiple: true,
          defaultValues: [OPTIONS[0]],
          onValuesChange: handleValuesChange,
          children: null,
        }),
      );

      act(() => result.current.handleSelect(OPTIONS[0]));

      expect(handleValuesChange).not.toHaveBeenCalled();
    });

    it('should remove a value', () => {
      const { result } = renderHook(() =>
        useAutoCompleteProvider({
          options: OPTIONS,
          isMultiple: true,
          defaultValues: [OPTIONS[0], OPTIONS[1]],
          children: null,
        }),
      );

      act(() => result.current.removeValue(OPTIONS[0]));

      expect(result.current.selectedOptions).toEqual([OPTIONS[1]]);
    });

    it('should clear the query and every value', () => {
      const { result } = renderHook(() =>
        useAutoCompleteProvider({
          options: OPTIONS,
          isMultiple: true,
          defaultValues: [OPTIONS[0]],
          children: null,
        }),
      );

      act(() => result.current.handleInputChange('ba'));
      act(() => result.current.handleClear());

      expect(result.current.inputValue).toBe('');
      expect(result.current.selectedOptions).toEqual([]);
      expect(result.current.hasContent).toBe(false);
    });

    it('should keep values controlled when provided', () => {
      const handleValuesChange = vi.fn();
      const { result } = renderHook(() =>
        useAutoCompleteProvider({
          options: OPTIONS,
          isMultiple: true,
          values: [OPTIONS[0]],
          onValuesChange: handleValuesChange,
          children: null,
        }),
      );

      act(() => result.current.handleSelect(OPTIONS[1]));

      expect(handleValuesChange).toHaveBeenCalledWith([OPTIONS[0], OPTIONS[1]]);
      expect(result.current.selectedOptions).toEqual([OPTIONS[0]]);
    });
  });
});
