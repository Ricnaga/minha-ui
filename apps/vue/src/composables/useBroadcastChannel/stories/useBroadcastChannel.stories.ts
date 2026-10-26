import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { testDefaultBroadcastChannel } from './useBroadcastChannel.play';
import UseBroadcastChannelStory from './UseBroadcastChannelStory.vue';

const meta: Meta<typeof UseBroadcastChannelStory> = {
  title: 'Composables/useBroadcastChannel',
  component: UseBroadcastChannelStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof UseBroadcastChannelStory> = {
  render: () => ({
    components: { UseBroadcastChannelStory },
    template: '<UseBroadcastChannelStory />',
  }),
  play: testDefaultBroadcastChannel,
};
