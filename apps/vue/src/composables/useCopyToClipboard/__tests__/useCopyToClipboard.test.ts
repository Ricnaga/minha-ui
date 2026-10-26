import { mount } from '@vue/test-utils';
import { defineComponent, h } from 'vue';
import { useCopyToClipboard } from '..';

const mockClipboard = {
  writeText: vi.fn().mockResolvedValue(undefined),
};

Object.defineProperty(navigator, 'clipboard', {
  value: mockClipboard,
  writable: true,
});

describe('useCopyToClipboard', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should copy text to clipboard successfully', async () => {
    const Comp = defineComponent({
      setup() {
        const { copyToClipboard, isCopied } = useCopyToClipboard();
        return () => h('button', { onClick: () => copyToClipboard('test text') }, isCopied.value ? 'copied' : 'copy');
      },
    });
    const wrapper = mount(Comp);
    await wrapper.find('button').trigger('click');
    await wrapper.vm.$nextTick();
    expect(mockClipboard.writeText).toHaveBeenCalledWith('test text');
  });
});
