import { renderHook } from '@testing-library/react';
import { useAutoComplete } from '../useAutoComplete';
import type { UseAutoCompleteProps } from '../auto-complete.types';

describe('useAutoComplete', () => {
  it('should forward props unchanged', () => {
    const props: UseAutoCompleteProps = {
      options: [{ key: '1', value: 'Banana' }],
      placeholder: 'Buscar',
      isDisabled: true,
    };

    const { result } = renderHook(() => useAutoComplete(props));

    expect(result.current.autoCompleteProps).toEqual(props);
  });
});
