import { renderHook } from '@testing-library/vue';
import { useBroadcastChannel } from '..';

describe('useBroadcastChannel', () => {
  it('should return post function', () => {
    const { result } = renderHook(() =>
      useBroadcastChannel('test', () => {}),
    );

    expect(typeof result.value.post).toBe('function');
  });
});
