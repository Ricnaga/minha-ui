import { mount } from '@vue/test-utils';
import { defineComponent, h } from 'vue';
import { useInfiniteScroll } from '..';

describe('useInfiniteScroll', () => {
  it('should return ref and isLoading', () => {
    const Comp = defineComponent({
      setup() {
        const { ref, isLoading } = useInfiniteScroll({ onLoadMore: async () => {} });
        return () => h('div', { ref }, isLoading.value ? 'loading' : 'idle');
      },
    });
    const wrapper = mount(Comp);
    expect(wrapper.text()).toBe('idle');
  });
});
