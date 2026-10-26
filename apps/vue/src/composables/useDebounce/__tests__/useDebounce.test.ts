import { renderHook, act } from '@testing-library/vue';
import { ref } from 'vue';
import { useDebounce } from '..';

describe('useDebounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should return initial value immediately', () => {
    const value = ref('initial');
    const { result } = renderHook(() => useDebounce(value, 500));
    expect(result.value).toBe('initial');
  });

  it('should not update value before delay', () => {
    const value = ref('initial');
    const { result } = renderHook(() => useDebounce(value, 500));

    expect(result.value).toBe('initial');

    value.value = 'updated';

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(result.value).toBe('initial');
  });

  it('should update value after delay', () => {
    const value = ref('initial');
    const { result } = renderHook(() => useDebounce(value, 500));

    value.value = 'updated';

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.value).toBe('updated');
  });

  it('should reset timer on value change', () => {
    const value = ref('initial');
    const { result } = renderHook(() => useDebounce(value, 500));

    value.value = 'updated1';

    act(() => {
      vi.advanceTimersByTime(400);
    });

    value.value = 'updated2';

    act(() => {
      vi.advanceTimersByTime(400);
    });

    expect(result.value).toBe('initial');

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(result.value).toBe('updated2');
  });
});
