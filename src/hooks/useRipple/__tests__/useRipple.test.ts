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
        getBoundingClientRect: () => ({ width: 100, height: 40 }),
        appendChild: vi.fn(),
      },
      clientX: 50,
      clientY: 20,
    } as any;

    result.current.handleRipple(mockEvent);

    expect(mockEvent.currentTarget.appendChild).toHaveBeenCalled();
    const appendedElement = (
      mockEvent.currentTarget.appendChild as ReturnType<typeof vi.fn>
    ).mock.calls[0][0];
    expect(appendedElement.tagName).toBe('SPAN');
  });
});
