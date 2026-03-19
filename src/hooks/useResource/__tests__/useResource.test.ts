import { renderHook } from '@testing-library/react';
import { useResource } from '../..';

vi.mock('src/infra/fetchers/cache', () => ({
  getCacheKey: vi.fn(() => 'test-key'),
  invalidateResource: vi.fn(),
}));

vi.mock('src/infra/fetchers/wrapper', () => ({
  createResource: vi.fn(() => ({
    read: () => ({ data: 'test-data' }),
    abort: vi.fn(),
  })),
}));

import { createResource } from 'src/infra/fetchers/wrapper';
import { invalidateResource } from 'src/infra/fetchers/cache';

const mockCreateResource = createResource as ReturnType<typeof vi.fn>;
const mockInvalidateResource = invalidateResource as ReturnType<typeof vi.fn>;

describe('useResource', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockCreateResource.mockReturnValue({
      read: () => ({ data: 'test-data' }),
      abort: vi.fn(),
    });
  });

  it('should return data, refetch and invalidate', () => {
    const { result } = renderHook(() => useResource({ endpoint: '/test' }));

    expect(result.current.data).toEqual({ data: 'test-data' });
    expect(result.current.refetch).toBeDefined();
    expect(result.current.invalidate).toBeDefined();
  });

  it('should call createResource on mount', () => {
    renderHook(() => useResource({ endpoint: '/test' }));

    expect(mockCreateResource).toHaveBeenCalledWith({
      endpoint: '/test',
    });
  });

  it('should call refetch function', () => {
    const { result } = renderHook(() => useResource({ endpoint: '/test' }));

    result.current.refetch();

    expect(mockCreateResource).toHaveBeenCalledTimes(2);
  });

  it('should call invalidate function', () => {
    const { result } = renderHook(() => useResource({ endpoint: '/test' }));

    result.current.invalidate();

    expect(mockInvalidateResource).toHaveBeenCalledWith('test-key');
  });
});
