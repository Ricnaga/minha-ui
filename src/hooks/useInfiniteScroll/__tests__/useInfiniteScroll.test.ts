import { renderHook } from '@testing-library/react';
import { useInfiniteScroll } from '../..';

vi.mock('../useIntersectionObserver', () => ({
  useIntersectionObserver: vi.fn(() => ({
    ref: vi.fn(),
    isIntersecting: false,
  })),
}));

describe('useInfiniteScroll', () => {
  it('should return ref and isLoading', async () => {
    const onLoadMore = vi.fn().mockResolvedValue(undefined);

    const { result } = renderHook(() => useInfiniteScroll({ onLoadMore }));

    expect(result.current.ref).toBeDefined();
    expect(typeof result.current.isLoading).toBe('boolean');
  });

  it('should call onLoadMore when isIntersecting is true', async () => {
    const onLoadMore = vi.fn().mockResolvedValue(undefined);

    const { result } = renderHook(() => useInfiniteScroll({ onLoadMore }));

    expect(result.current.ref).toBeDefined();
  });

  it('should accept custom threshold', () => {
    const onLoadMore = vi.fn();

    const { result } = renderHook(() =>
      useInfiniteScroll({ onLoadMore, threshold: 0.8 }),
    );

    expect(result.current.ref).toBeDefined();
  });

  it('should accept custom rootMargin', () => {
    const onLoadMore = vi.fn();

    const { result } = renderHook(() =>
      useInfiniteScroll({ onLoadMore, rootMargin: '100px' }),
    );

    expect(result.current.ref).toBeDefined();
  });

  it('should accept once option', () => {
    const onLoadMore = vi.fn();

    const { result } = renderHook(() =>
      useInfiniteScroll({ onLoadMore, once: true }),
    );

    expect(result.current.ref).toBeDefined();
  });
});
