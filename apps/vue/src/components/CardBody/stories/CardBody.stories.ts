import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { h } from 'vue';

import { CardBody } from '../';
import { testDefaultCardBody } from './CardBody.play';
import CardBodyStory from './CardBodyStory.vue';

const meta: Meta<typeof CardBodyStory> = {
  title: 'Components/Estruturas/Card/CardBody',
  component: CardBody,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof CardBodyStory>;

export const Default: Story = {
  render: (args) => h(CardBodyStory, args),
  play: testDefaultCardBody,
};
