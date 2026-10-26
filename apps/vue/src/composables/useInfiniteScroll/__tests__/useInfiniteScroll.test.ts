import { renderHook } from '@testing-library/vue';
import { useInfiniteScroll } from '..';

describe('useInfiniteScroll', () => {
  it('should return ref and isLoading', () => {
    const { result } = renderHook(() =>
      useInfiniteScroll({ onLoadMore: async () => {} }),
    );

    expect(result.value.ref).toBeDefined();
    expect(result.value.isLoading.value).toBe(false);
  });
});
