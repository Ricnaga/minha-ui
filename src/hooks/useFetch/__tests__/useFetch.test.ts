import { renderHook, waitFor } from '@testing-library/react';
import { useFetch } from '../..';

vi.mock('src/infra/fetchers', () => ({
  fetcher: vi.fn(),
}));

import { fetcher } from 'src/infra/fetchers';

const mockFetcher = fetcher as ReturnType<typeof vi.fn>;

describe('useFetch', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return initial state', () => {
    const { result } = renderHook(() =>
      useFetch({ endpoint: '/test', isRequesting: false }),
    );

    expect(result.current.data).toBeNull();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('should fetch data when isRequesting is true', async () => {
    mockFetcher.mockResolvedValue({ data: 'test-data' });

    const { result } = renderHook(() =>
      useFetch({ endpoint: '/test', isRequesting: true }),
    );

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.data).toEqual({ data: 'test-data' });
    expect(result.current.error).toBeNull();
  });

  it('should handle error', async () => {
    mockFetcher.mockRejectedValue(new Error('Fetch error'));

    const { result } = renderHook(() =>
      useFetch({ endpoint: '/test', isRequesting: true }),
    );

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.error?.message).toBe('Fetch error');
  });

  it('should provide refetch function', async () => {
    mockFetcher.mockResolvedValue({ data: 'test-data' });

    const { result } = renderHook(() =>
      useFetch({ endpoint: '/test', isRequesting: false }),
    );

    expect(result.current.refetch).toBeDefined();
    expect(typeof result.current.refetch).toBe('function');
  });
});
