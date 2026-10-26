import { mount } from '@vue/test-utils';
import { defineComponent, h } from 'vue';
import { useResource } from '..';

describe('useResource', () => {
  it('should return refetch and invalidate', () => {
    const Comp = defineComponent({
      setup() {
        const { refetch, invalidate } = useResource({ endpoint: '/test' });
        return () => h('div', typeof refetch + typeof invalidate);
      },
    });
    const wrapper = mount(Comp);
    expect(wrapper.text()).toBe('functionfunction');
  });
});
