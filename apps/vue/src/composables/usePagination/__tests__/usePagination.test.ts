import { mount } from '@vue/test-utils';
import { defineComponent, h } from 'vue';
import { usePagination } from '..';

describe('usePagination', () => {
  it('should return pagination info', () => {
    const items = Array.from({ length: 25 }, (_, i) => i);
    const Comp = defineComponent({
      setup() {
        const { totalPages } = usePagination({ items, pageSize: 10 });
        return () => h('span', String(totalPages.value));
      },
    });
    const wrapper = mount(Comp);
    expect(wrapper.text()).toBe('3');
  });
});
