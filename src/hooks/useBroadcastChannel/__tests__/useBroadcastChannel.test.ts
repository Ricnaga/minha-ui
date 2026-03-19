import { renderHook } from '@testing-library/react';
import { useBroadcastChannel } from '../..';

describe('useBroadcastChannel', () => {
  it('should return post function', () => {
    const onMessage = vi.fn();
    const { result } = renderHook(() =>
      useBroadcastChannel<string>('test-channel', onMessage),
    );

    expect(result.current.post).toBeDefined();
    expect(typeof result.current.post).toBe('function');
  });

  it('should accept name and onMessage params', () => {
    const onMessage = vi.fn();
    const { result } = renderHook(() =>
      useBroadcastChannel<string>('test-channel', onMessage),
    );

    expect(result.current.post).toBeDefined();
  });

  it('should cleanup on unmount', () => {
    const onMessage = vi.fn();
    const { unmount } = renderHook(() =>
      useBroadcastChannel<string>('test-channel', onMessage),
    );

    expect(() => unmount()).not.toThrow();
  });

  it('should post message', () => {
    const onMessage = vi.fn();
    const { result } = renderHook(() =>
      useBroadcastChannel<string>('test-channel', onMessage),
    );

    result.current.post('test message');
  });
});
