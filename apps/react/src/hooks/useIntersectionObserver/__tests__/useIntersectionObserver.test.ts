import { renderHook } from '@testing-library/react';
import { useIntersectionObserver } from '../..';

describe('useIntersectionObserver', () => {
  it('should return ref and isIntersecting', () => {
    const { result } = renderHook(() => useIntersectionObserver());

    expect(result.current.ref).toBeDefined();
    expect(result.current.isIntersecting).toBe(false);
  });

  it('should accept threshold option', () => {
    const { result } = renderHook(() =>
      useIntersectionObserver({ threshold: 0.5 }),
    );

    expect(result.current.ref).toBeDefined();
  });

  it('should accept rootMargin option', () => {
    const { result } = renderHook(() =>
      useIntersectionObserver({ rootMargin: '100px' }),
    );

    expect(result.current.ref).toBeDefined();
  });

  it('should accept once option', () => {
    const { result } = renderHook(() =>
      useIntersectionObserver({ once: true }),
    );

    expect(result.current.ref).toBeDefined();
  });
});
