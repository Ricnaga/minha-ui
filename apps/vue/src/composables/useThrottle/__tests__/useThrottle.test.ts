import { renderHook } from '@testing-library/vue';
import { useThrottle } from '..';

describe('useThrottle', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should call function immediately on first call', () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useThrottle(callback, 500));

    result.value();

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should throttle calls within delay', () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useThrottle(callback, 500));

    result.value();
    result.value();
    result.value();

    expect(callback).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(500);

    expect(callback).toHaveBeenCalledTimes(2);
  });
});
