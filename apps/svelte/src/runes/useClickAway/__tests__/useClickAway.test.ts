import { render } from '@testing-library/svelte';
import { flushSync } from 'svelte';
import Test from './Test.svelte';

describe('useClickAway', () => {
  let mockCallback: (event: Event) => void;

  beforeEach(() => {
    mockCallback = vi.fn();
  });

  it('should call callback when clicking outside the element', () => {
    const { getByTestId } = render(Test, { props: { onOutsideClick: mockCallback } });
    const element = getByTestId('target');

    document.body.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
    flushSync();

    expect(mockCallback).toHaveBeenCalled();
  });
});
