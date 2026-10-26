import type { Meta, StoryObj } from '@storybook/svelte';
import { testDefaultBroadcastChannel } from './useBroadcastChannel.play';
import UseBroadcastChannelStory from './UseBroadcastChannelStory.svelte';

const meta: Meta<typeof UseBroadcastChannelStory> = {
  title: 'Runes/useBroadcastChannel',
  component: UseBroadcastChannelStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof UseBroadcastChannelStory> = {
  render: () => ({
    Component: UseBroadcastChannelStory,
  }),
  play: testDefaultBroadcastChannel,
};
