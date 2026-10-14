import { act, renderHook } from '@testing-library/react';
import type { ChangeEvent, ClipboardEvent, KeyboardEvent } from 'react';
import { useOtpInput } from '../useOtpInput';

const changeEvent = (value: string) =>
  ({ target: { value } }) as unknown as ChangeEvent<HTMLInputElement>;

const keyEvent = (key: string) =>
  ({
    key,
    preventDefault: vi.fn(),
  }) as unknown as KeyboardEvent<HTMLInputElement>;

const pasteEvent = (text: string) =>
  ({
    preventDefault: vi.fn(),
    clipboardData: { getData: () => text },
  }) as unknown as ClipboardEvent<HTMLInputElement>;

describe('useOtpInput', () => {
  it('should render six empty fields by default', () => {
    const { result } = renderHook(() => useOtpInput({}));

    expect(result.current.fieldsProps).toHaveLength(6);
    expect(result.current.fieldsProps.map((field) => field.value)).toEqual([
      '',
      '',
      '',
      '',
      '',
      '',
    ]);
  });

  it('should respect the length prop', () => {
    const { result } = renderHook(() => useOtpInput({ length: 4 }));

    expect(result.current.fieldsProps).toHaveLength(4);
  });

  it('should fill fields from defaultValue', () => {
    const { result } = renderHook(() => useOtpInput({ defaultValue: '1234' }));

    expect(result.current.fieldsProps.map((field) => field.value)).toEqual([
      '1',
      '2',
      '3',
      '4',
      '',
      '',
    ]);
  });

  it('should keep leading zeros from defaultValue', () => {
    const handleOTPChange = vi.fn();
    const { result } = renderHook(() =>
      useOtpInput({ defaultValue: '012345', onOTPChange: handleOTPChange }),
    );

    act(() => {
      result.current.fieldsProps[5].onChange(changeEvent('6'));
    });

    expect(handleOTPChange).toHaveBeenCalledWith('012346');
  });

  it('should emit the full string on change', () => {
    const handleOTPChange = vi.fn();
    const { result } = renderHook(() =>
      useOtpInput({ onOTPChange: handleOTPChange }),
    );

    act(() => {
      result.current.fieldsProps[0].onChange(changeEvent('7'));
    });

    expect(handleOTPChange).toHaveBeenCalledWith('7');
    expect(result.current.fieldsProps[0].value).toBe('7');
  });

  it('should strip non-digit characters', () => {
    const handleOTPChange = vi.fn();
    const { result } = renderHook(() =>
      useOtpInput({ onOTPChange: handleOTPChange }),
    );

    act(() => {
      result.current.fieldsProps[0].onChange(changeEvent('a'));
    });

    expect(handleOTPChange).toHaveBeenCalledWith('');
    expect(result.current.fieldsProps[0].value).toBe('');
  });

  it('should clear the previous field when backspacing an empty field', () => {
    const handleOTPChange = vi.fn();
    const { result } = renderHook(() =>
      useOtpInput({ defaultValue: '12', onOTPChange: handleOTPChange }),
    );

    act(() => {
      result.current.fieldsProps[2].onKeyDown(keyEvent('Backspace'));
    });

    expect(handleOTPChange).toHaveBeenCalledWith('1');
  });

  it('should fill all fields from a paste', () => {
    const handleOTPChange = vi.fn();
    const { result } = renderHook(() =>
      useOtpInput({ length: 4, onOTPChange: handleOTPChange }),
    );

    act(() => {
      result.current.fieldsProps[0].onPaste(pasteEvent('12-34'));
    });

    expect(handleOTPChange).toHaveBeenCalledWith('1234');
    expect(result.current.fieldsProps.map((field) => field.value)).toEqual([
      '1',
      '2',
      '3',
      '4',
    ]);
  });

  it('should ignore paste without digits', () => {
    const handleOTPChange = vi.fn();
    const { result } = renderHook(() =>
      useOtpInput({ onOTPChange: handleOTPChange }),
    );

    act(() => {
      result.current.fieldsProps[0].onPaste(pasteEvent('abc'));
    });

    expect(handleOTPChange).not.toHaveBeenCalled();
  });

  it('should not update internal state when controlled', () => {
    const handleOTPChange = vi.fn();
    const { result } = renderHook(() =>
      useOtpInput({ value: '12', onOTPChange: handleOTPChange }),
    );

    act(() => {
      result.current.fieldsProps[0].onChange(changeEvent('9'));
    });

    expect(handleOTPChange).toHaveBeenCalledWith('92');
    expect(result.current.fieldsProps[0].value).toBe('1');
  });

  it('should expose container accessibility props', () => {
    const { result } = renderHook(() =>
      useOtpInput({ 'aria-label': 'Código SMS' }),
    );

    expect(result.current.containerProps.role).toBe('group');
    expect(result.current.containerProps['aria-label']).toBe('Código SMS');
  });

  it('should use password type when mask is enabled', () => {
    const { result } = renderHook(() => useOtpInput({ mask: true }));

    expect(result.current.fieldsProps[0].type).toBe('password');
  });

  it('should mark all fields as disabled', () => {
    const { result } = renderHook(() => useOtpInput({ disabled: true }));

    expect(result.current.fieldsProps.every((field) => field.disabled)).toBe(
      true,
    );
  });

  it('should focus only the first field when autoFocus is enabled', () => {
    const { result } = renderHook(() => useOtpInput({ autoFocus: true }));

    expect(result.current.fieldsProps[0].autoFocus).toBe(true);
    expect(result.current.fieldsProps[1].autoFocus).toBe(false);
  });
});
