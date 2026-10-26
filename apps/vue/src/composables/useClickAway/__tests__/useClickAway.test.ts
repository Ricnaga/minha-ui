import { renderHook } from '@testing-library/vue';
import { useClickAway } from '..';
import { fireEvent } from '@testing-library/vue';

describe('useClickAway', () => {
  let mockCallback: (event: Event) => void;

  beforeEach(() => {
    mockCallback = vi.fn();
  });

  it('should return a ref', () => {
    const { result } = renderHook(() =>
      useClickAway({ onOutsideClick: mockCallback }),
    );

    expect(result.value).toBeDefined();
  });

  it('should call callback when clicking outside the element', () => {
    const { result } = renderHook(() =>
      useClickAway({ onOutsideClick: mockCallback }),
    );

    const element = document.createElement('div');
    document.body.appendChild(element);
    result.value.value = element;

    fireEvent.pointerDown(document.body);

    expect(mockCallback).toHaveBeenCalledTimes(1);

    document.body.removeChild(element);
  });

  it('should not call callback when clicking inside the element', () => {
    const { result } = renderHook(() =>
      useClickAway({ onOutsideClick: mockCallback }),
    );

    const element = document.createElement('div');
    document.body.appendChild(element);
    result.value.value = element;

    fireEvent.pointerDown(element);

    expect(mockCallback).not.toHaveBeenCalled();

    document.body.removeChild(element);
  });

  it('should not call callback when disabled', () => {
    const { result } = renderHook(() =>
      useClickAway({ onOutsideClick: mockCallback, enabled: false }),
    );

    const element = document.createElement('div');
    document.body.appendChild(element);
    result.value.value = element;

    fireEvent.pointerDown(document.body);

    expect(mockCallback).not.toHaveBeenCalled();

    document.body.removeChild(element);
  });
});
