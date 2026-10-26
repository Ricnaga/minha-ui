import { mount } from '@vue/test-utils';
import { defineComponent, h } from 'vue';
import { useClickAway } from '..';

describe('useClickAway', () => {
  it('should call callback when clicking outside the element', () => {
    const mockCallback = vi.fn();
    const Comp = defineComponent({
      setup() {
        const targetRef = useClickAway({ onOutsideClick: mockCallback });
        return () => h('div', { ref: targetRef }, 'target');
      },
    });
    mount(Comp);
    document.body.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
    expect(mockCallback).toHaveBeenCalled();
  });
});
