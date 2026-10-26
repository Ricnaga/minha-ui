import { mount } from '@vue/test-utils';
import { defineComponent, h, ref } from 'vue';
import { useDebounce } from '..';

describe('useDebounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should return initial value immediately', () => {
    const Comp = defineComponent({
      setup() {
        const value = ref('initial');
        const debounced = useDebounce(value, 500);
        return () => h('span', debounced.value);
      },
    });
    const wrapper = mount(Comp);
    expect(wrapper.text()).toBe('initial');
  });
});
