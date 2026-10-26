import { mount } from '@vue/test-utils';
import { defineComponent, h } from 'vue';
import { useBroadcastChannel } from '..';

describe('useBroadcastChannel', () => {
  it('should return post function', () => {
    const Comp = defineComponent({
      setup() {
        const { post } = useBroadcastChannel('test', () => {});
        return () => h('button', { onClick: () => post('x') }, 'send');
      },
    });
    const wrapper = mount(Comp);
    expect(typeof wrapper.find('button').exists()).toBe(true);
  });
});
