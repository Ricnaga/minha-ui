import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { h } from 'vue';

import { CardHeader } from '../';
import { testDefaultCardHeader } from './CardHeader.play';
import CardHeaderStory from './CardHeaderStory.vue';

const meta: Meta<typeof CardHeaderStory> = {
  title: 'Components/Estruturas/Card/CardHeader',
  component: CardHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof CardHeaderStory>;

export const Default: Story = {
  render: (args) => h(CardHeaderStory, args),
  play: testDefaultCardHeader,
};
