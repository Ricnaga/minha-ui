import { renderHook, act } from '@testing-library/react';
import { usePagination } from '..';

describe('usePagination', () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  it('should initialize with default values', () => {
    const { result } = renderHook(() => usePagination({ items: [] }));

    expect(result.current.pagination.pageNumber).toBe(1);
    expect(result.current.pagination.pageSize).toBe(10);
    expect(result.current.totalPages).toBe(0);
    expect(result.current.totalItems).toBe(0);
  });

  it('should use provided items for totalItems when totalItems not provided', () => {
    const { result } = renderHook(() => usePagination({ items }));

    expect(result.current.totalItems).toBe(15);
    expect(result.current.totalPages).toBe(2);
  });

  it('should use provided totalItems', () => {
    const { result } = renderHook(() =>
      usePagination({ items: [], totalItems: 50 }),
    );

    expect(result.current.totalItems).toBe(50);
    expect(result.current.totalPages).toBe(5);
  });

  it('should return current page items', () => {
    const { result } = renderHook(() => usePagination({ items, pageSize: 5 }));

    expect(result.current.currentPageItems).toEqual([1, 2, 3, 4, 5]);
  });

  it('should go to next page', () => {
    const { result } = renderHook(() => usePagination({ items, pageSize: 5 }));

    act(() => {
      result.current.onNextPage();
    });

    expect(result.current.pagination.pageNumber).toBe(2);
    expect(result.current.currentPageItems).toEqual([6, 7, 8, 9, 10]);
  });

  it('should go to previous page', () => {
    const { result } = renderHook(() =>
      usePagination({ items, pageSize: 5, pageNumber: 2 }),
    );

    act(() => {
      result.current.onPrevPage();
    });

    expect(result.current.pagination.pageNumber).toBe(1);
  });

  it('should not go below page 1', () => {
    const { result } = renderHook(() =>
      usePagination({ items, pageNumber: 1 }),
    );

    act(() => {
      result.current.onPrevPage();
    });

    expect(result.current.pagination.pageNumber).toBe(1);
  });

  it('should not exceed total pages', () => {
    const { result } = renderHook(() => usePagination({ items, pageSize: 5 }));

    act(() => {
      result.current.onNextPage();
    });

    act(() => {
      result.current.onNextPage();
    });

    expect(result.current.pagination.pageNumber).toBe(3);
  });

  it('should set page number', () => {
    const { result } = renderHook(() => usePagination({ items, pageSize: 5 }));

    act(() => {
      result.current.setPageNumber(2);
    });

    expect(result.current.pagination.pageNumber).toBe(2);
  });

  it('should set page size and reset to page 1', () => {
    const { result } = renderHook(() =>
      usePagination({ items, pageNumber: 2, pageSize: 5 }),
    );

    act(() => {
      result.current.setPageSize(10);
    });

    expect(result.current.pagination.pageSize).toBe(10);
    expect(result.current.pagination.pageNumber).toBe(1);
  });

  it('should clamp page number to valid range', () => {
    const { result } = renderHook(() => usePagination({ items, pageSize: 5 }));

    act(() => {
      result.current.setPageNumber(100);
    });

    expect(result.current.pagination.pageNumber).toBe(3);

    act(() => {
      result.current.setPageNumber(0);
    });

    expect(result.current.pagination.pageNumber).toBe(1);
  });
});
