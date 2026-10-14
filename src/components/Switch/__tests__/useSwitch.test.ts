import { renderHook } from '@testing-library/react';
import type { ChangeEvent } from 'react';
import { useSwitch } from '../useSwitch';

const changeEvent = (checked: boolean) =>
  ({ target: { checked } }) as unknown as ChangeEvent<HTMLInputElement>;

describe('useSwitch', () => {
  it('should expose a switch role on the track', () => {
    const { result } = renderHook(() => useSwitch({}));

    expect(result.current.trackProps.role).toBe('switch');
    expect(result.current.trackProps.type).toBe('checkbox');
  });

  it('should emit a boolean on change', () => {
    const handleCheckedChange = vi.fn();
    const { result } = renderHook(() =>
      useSwitch({ onCheckedChange: handleCheckedChange }),
    );

    result.current.trackProps.onChange?.(changeEvent(true));

    expect(handleCheckedChange).toHaveBeenCalledWith(true);
  });

  it('should also forward the native onChange', () => {
    const handleChange = vi.fn();
    const { result } = renderHook(() => useSwitch({ onChange: handleChange }));

    const event = changeEvent(false);
    result.current.trackProps.onChange?.(event);

    expect(handleChange).toHaveBeenCalledWith(event);
  });

  it('should apply the medium size by default', () => {
    const { result } = renderHook(() => useSwitch({}));

    expect(result.current.trackProps.className).toContain('w-11');
  });

  it('should apply the small size variant', () => {
    const { result } = renderHook(() => useSwitch({ size: 'small' }));

    expect(result.current.trackProps.className).toContain('w-9');
  });

  it('should apply the selected color variant', () => {
    const { result } = renderHook(() => useSwitch({ color: 'success' }));

    expect(result.current.trackProps.className).toContain(
      'checked:bg-emerald-500',
    );
  });

  it('should mark the track as disabled', () => {
    const { result } = renderHook(() => useSwitch({ disabled: true }));

    expect(result.current.trackProps.disabled).toBe(true);
    expect(result.current.containerProps.className).toContain(
      'cursor-not-allowed',
    );
  });

  it('should report when a label is provided', () => {
    const { result } = renderHook(() => useSwitch({ label: 'Ativo' }));

    expect(result.current.hasLabel).toBe(true);
    expect(result.current.labelProps.children).toBe('Ativo');
  });

  it('should not render a label when none is provided', () => {
    const { result } = renderHook(() => useSwitch({}));

    expect(result.current.hasLabel).toBe(false);
  });
});
