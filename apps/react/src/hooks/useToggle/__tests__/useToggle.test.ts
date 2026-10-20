import { renderHook, act } from '@testing-library/react';
import { useToggle } from '..';

describe('useToggle', () => {
  it('should initialize with false by default', () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current.isToggle).toBe(false);
  });

  it('should initialize with provided value', () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current.isToggle).toBe(true);
  });

  it('should toggle value', () => {
    const { result } = renderHook(() => useToggle());

    act(() => {
      result.current.handleToggle();
    });

    expect(result.current.isToggle).toBe(true);

    act(() => {
      result.current.handleToggle();
    });

    expect(result.current.isToggle).toBe(false);
  });

  it('should set value to false with handleClose', () => {
    const { result } = renderHook(() => useToggle(true));

    act(() => {
      result.current.handleClose();
    });

    expect(result.current.isToggle).toBe(false);
  });

  it('should set value to true with handleOpen', () => {
    const { result } = renderHook(() => useToggle());

    act(() => {
      result.current.handleOpen();
    });

    expect(result.current.isToggle).toBe(true);
  });

  it('should set arbitrary value with setAsToggle', () => {
    const { result } = renderHook(() => useToggle());

    act(() => {
      result.current.setAsToggle(true);
    });

    expect(result.current.isToggle).toBe(true);

    act(() => {
      result.current.setAsToggle(false);
    });

    expect(result.current.isToggle).toBe(false);
  });
});
