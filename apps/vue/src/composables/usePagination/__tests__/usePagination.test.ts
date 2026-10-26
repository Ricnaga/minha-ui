import { renderHook, act } from '@testing-library/vue';
import { usePagination } from '..';

describe('usePagination', () => {
  it('should return pagination info', () => {
    const items = Array.from({ length: 25 }, (_, i) => i);
    const { result } = renderHook(() =>
      usePagination({ items, pageSize: 10 }),
    );

    expect(result.value.totalPages).toBe(3);
    expect(result.value.currentPageItems.length).toBe(10);
  });

  it('should go to next page', () => {
    const items = Array.from({ length: 25 }, (_, i) => i);
    const { result } = renderHook(() =>
      usePagination({ items, pageSize: 10 }),
    );

    act(() => {
      result.value.onNextPage();
    });

    expect(result.value.pagination.value.pageNumber).toBe(2);
  });
});
