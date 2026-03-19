import { renderHook } from '@testing-library/react';
import { useClickAway } from '..';
import { fireEvent } from '@testing-library/react';

describe('useClickAway', () => {
  let mockCallback: (event: Event) => void;

  beforeEach(() => {
    mockCallback = vi.fn();
  });

  it('should return a ref function', () => {
    const { result } = renderHook(() =>
      useClickAway({ onOutsideClick: mockCallback }),
    );

    expect(typeof result.current).toBe('function');
  });

  it('should call callback when clicking outside the element', () => {
    const { result } = renderHook(() =>
      useClickAway({ onOutsideClick: mockCallback }),
    );

    const ref = result.current;

    const element = document.createElement('div');
    element.setAttribute('data-testid', 'target');
    document.body.appendChild(element);

    ref(element);

    fireEvent.pointerDown(document.body);

    expect(mockCallback).toHaveBeenCalledTimes(1);

    document.body.removeChild(element);
  });

  it('should not call callback when clicking inside the element', () => {
    const { result } = renderHook(() =>
      useClickAway({ onOutsideClick: mockCallback }),
    );

    const ref = result.current;

    const element = document.createElement('div');
    document.body.appendChild(element);

    ref(element);

    fireEvent.pointerDown(element);

    expect(mockCallback).not.toHaveBeenCalled();

    document.body.removeChild(element);
  });

  it('should not call callback when disabled', () => {
    const { result } = renderHook(() =>
      useClickAway({ onOutsideClick: mockCallback, enabled: false }),
    );

    const ref = result.current;

    const element = document.createElement('div');
    document.body.appendChild(element);

    ref(element);

    fireEvent.pointerDown(document.body);

    expect(mockCallback).not.toHaveBeenCalled();

    document.body.removeChild(element);
  });

  it('should remove listener on unmount', () => {
    const { unmount } = renderHook(() =>
      useClickAway({ onOutsideClick: mockCallback }),
    );

    unmount();

    fireEvent.pointerDown(document.body);

    expect(mockCallback).not.toHaveBeenCalled();
  });
});
