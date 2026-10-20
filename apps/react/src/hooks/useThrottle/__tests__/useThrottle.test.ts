import { renderHook, act } from '@testing-library/react';
import { useThrottle } from '..';

describe('useThrottle', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should call callback immediately on first call', () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useThrottle(callback, 100));

    act(() => {
      result.current('arg1');
    });

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith('arg1');
  });

  it('should throttle subsequent calls within delay', () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useThrottle(callback, 100));

    act(() => {
      result.current('call1');
    });

    act(() => {
      result.current('call2');
    });

    act(() => {
      result.current('call3');
    });

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith('call1');
  });

  it('should call callback with last args after delay expires', () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useThrottle(callback, 100));

    act(() => {
      result.current('call1');
    });

    act(() => {
      result.current('call2');
    });

    act(() => {
      result.current('call3');
    });

    expect(callback).toHaveBeenCalledTimes(1);

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenLastCalledWith('call3');
  });

  it('should use correct delay from props', () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useThrottle(callback, 500));

    act(() => {
      result.current();
    });

    act(() => {
      result.current();
    });

    vi.advanceTimersByTime(300);

    expect(callback).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(200);

    expect(callback).toHaveBeenCalledTimes(2);
  });
});
