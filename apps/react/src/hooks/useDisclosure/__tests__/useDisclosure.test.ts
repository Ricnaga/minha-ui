import { renderHook, act } from '@testing-library/react';
import { useDisclosure } from '..';

describe('useDisclosure', () => {
  it('should initialize with false by default', () => {
    const { result } = renderHook(() => useDisclosure());
    expect(result.current.isOpen).toBe(false);
  });

  it('should initialize with provided value', () => {
    const { result } = renderHook(() => useDisclosure(true));
    expect(result.current.isOpen).toBe(true);
  });

  it('should toggle value', () => {
    const { result } = renderHook(() => useDisclosure());

    act(() => {
      result.current.handleToggle();
    });

    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.handleToggle();
    });

    expect(result.current.isOpen).toBe(false);
  });

  it('should set value to false with handleClose', () => {
    const { result } = renderHook(() => useDisclosure(true));

    act(() => {
      result.current.handleClose();
    });

    expect(result.current.isOpen).toBe(false);
  });

  it('should set value to true with handleOpen', () => {
    const { result } = renderHook(() => useDisclosure());

    act(() => {
      result.current.handleOpen();
    });

    expect(result.current.isOpen).toBe(true);
  });

  it('should set arbitrary value with setAsOpen', () => {
    const { result } = renderHook(() => useDisclosure());

    act(() => {
      result.current.setAsOpen(true);
    });

    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.setAsOpen(false);
    });

    expect(result.current.isOpen).toBe(false);
  });
});
