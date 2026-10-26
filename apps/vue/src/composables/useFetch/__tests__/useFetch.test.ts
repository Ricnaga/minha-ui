import { mount } from '@vue/test-utils';
import { defineComponent, h } from 'vue';
import { useFetch } from '..';

describe('useFetch', () => {
  it('should return initial state', () => {
    const Comp = defineComponent({
      setup() {
        const { isIdle } = useFetch({ endpoint: '/test', isRequesting: false });
        return () => h('span', isIdle.value ? 'idle' : 'other');
      },
    });
    const wrapper = mount(Comp);
    expect(wrapper.text()).toBe('idle');
  });
});
