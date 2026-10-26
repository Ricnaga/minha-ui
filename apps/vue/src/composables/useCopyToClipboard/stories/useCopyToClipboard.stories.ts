import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { testDefaultCopyToClipboard } from './useCopyToClipboard.play';
import UseCopyToClipboardStory from './UseCopyToClipboardStory.vue';

const meta: Meta<typeof UseCopyToClipboardStory> = {
  title: 'Composables/useCopyToClipboard',
  component: UseCopyToClipboardStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof UseCopyToClipboardStory> = {
  render: () => ({
    components: { UseCopyToClipboardStory },
    template: '<UseCopyToClipboardStory />',
  }),
  play: testDefaultCopyToClipboard,
};
