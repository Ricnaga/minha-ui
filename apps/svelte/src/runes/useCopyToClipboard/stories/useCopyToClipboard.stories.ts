import type { Meta, StoryObj } from '@storybook/svelte';
import { testDefaultCopyToClipboard } from './useCopyToClipboard.play';
import UseCopyToClipboardStory from './UseCopyToClipboardStory.svelte';

const meta: Meta<typeof UseCopyToClipboardStory> = {
  title: 'Runes/useCopyToClipboard',
  component: UseCopyToClipboardStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof UseCopyToClipboardStory> = {
  render: () => ({
    Component: UseCopyToClipboardStory,
  }),
  play: testDefaultCopyToClipboard,
};
