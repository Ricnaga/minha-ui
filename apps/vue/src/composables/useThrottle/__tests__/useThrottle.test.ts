import { mount } from '@vue/test-utils';
import { defineComponent, h } from 'vue';
import { useThrottle } from '..';

describe('useThrottle', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should call function immediately on first call', () => {
    const callback = vi.fn();
    const Comp = defineComponent({
      setup() {
        const throttled = useThrottle(callback, 500);
        return () => h('button', { onClick: throttled }, 'click');
      },
    });
    const wrapper = mount(Comp);
    wrapper.find('button').trigger('click');
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
