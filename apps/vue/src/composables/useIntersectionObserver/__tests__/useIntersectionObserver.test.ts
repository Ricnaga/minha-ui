import { mount } from '@vue/test-utils';
import { defineComponent, h } from 'vue';
import { useIntersectionObserver } from '..';

describe('useIntersectionObserver', () => {
  it('should return ref and isIntersecting', () => {
    const Comp = defineComponent({
      setup() {
        const { ref, isIntersecting } = useIntersectionObserver();
        return () => h('div', { ref }, isIntersecting.value ? 'yes' : 'no');
      },
    });
    const wrapper = mount(Comp);
    expect(wrapper.text()).toBe('no');
  });
});
