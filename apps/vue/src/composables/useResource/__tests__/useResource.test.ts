import { renderHook } from '@testing-library/vue';
import { useResource } from '..';

describe('useResource', () => {
  it('should return refetch and invalidate', () => {
    const { result } = renderHook(() =>
      useResource({ endpoint: '/test' }),
    );

    expect(typeof result.value.refetch).toBe('function');
    expect(typeof result.value.invalidate).toBe('function');
  });
});
