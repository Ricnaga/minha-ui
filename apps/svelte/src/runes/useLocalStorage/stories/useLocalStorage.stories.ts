import type { Meta, StoryObj } from '@storybook/svelte';
import { testDefaultLocalStorage } from './useLocalStorage.play';
import UseLocalStorageStory from './UseLocalStorageStory.svelte';

const meta: Meta<typeof UseLocalStorageStory> = {
  title: 'Runes/useLocalStorage',
  component: UseLocalStorageStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof UseLocalStorageStory> = {
  render: () => ({
    Component: UseLocalStorageStory,
  }),
  play: testDefaultLocalStorage,
};
