import type { Meta, StoryObj } from '@storybook/svelte';
import { testDefaultDisclosure, testFullExampleDisclosure } from './useDisclosure.play';
import UseDisclosureStory from './UseDisclosureStory.svelte';

const meta: Meta<typeof UseDisclosureStory> = {
  title: 'Runes/useDisclosure',
  component: UseDisclosureStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof UseDisclosureStory> = {
  render: () => ({
    Component: UseDisclosureStory,
  }),
  play: testDefaultDisclosure,
};

export const FullExample: StoryObj<typeof UseDisclosureStory> = {
  render: () => ({
    Component: UseDisclosureStory,
  }),
  play: testFullExampleDisclosure,
};
