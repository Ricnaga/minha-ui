import { renderHook } from '@testing-library/react';
import { useRipple } from '../..';

describe('useRipple', () => {
  it('should return handleRipple function', () => {
    const { result } = renderHook(() => useRipple());

    expect(result.current.handleRipple).toBeDefined();
    expect(typeof result.current.handleRipple).toBe('function');
  });

  it('should create ripple element when called', () => {
    const { result } = renderHook(() => useRipple());

    const mockEvent = {
      currentTarget: {
        getBoundingClientRect: () => ({
          width: 100,
          height: 40,
          x: 0,
          y: 0,
          bottom: 40,
          left: 0,
          right: 100,
          top: 0,
          toJSON: () => ({}),
        }),
        appendChild: vi.fn(),
      },
      clientX: 50,
      clientY: 20,
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    result.current.handleRipple(mockEvent as any);

    expect(mockEvent.currentTarget.appendChild).toHaveBeenCalled();
    const appendedElement =
      mockEvent.currentTarget.appendChild.mock.calls[0][0];
    expect(appendedElement.tagName).toBe('SPAN');
  });
});
