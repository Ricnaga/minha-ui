import { renderHook } from '@testing-library/vue';
import { useIntersectionObserver } from '..';

describe('useIntersectionObserver', () => {
  it('should return ref and isIntersecting', () => {
    const { result } = renderHook(() => useIntersectionObserver());

    expect(result.value.ref).toBeDefined();
    expect(result.value.isIntersecting.value).toBe(false);
  });

  it('should accept threshold option', () => {
    const { result } = renderHook(() =>
      useIntersectionObserver({ threshold: 0.5 }),
    );

    expect(result.value.ref).toBeDefined();
  });
});
