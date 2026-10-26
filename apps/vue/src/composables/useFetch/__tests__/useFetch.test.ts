import { renderHook } from '@testing-library/vue';
import { useFetch } from '..';

describe('useFetch', () => {
  it('should return initial state', () => {
    const { result } = renderHook(() =>
      useFetch({ endpoint: '/test', isRequesting: false }),
    );

    expect(result.value.isIdle).toBe(true);
  });
});
