import type { Meta, StoryObj } from '@storybook/vue3';
import UseDisclosureStory from './UseDisclosureStory.vue';

const meta = {
  title: 'Composables/useDisclosure',
  component: UseDisclosureStory,
  tags: ['autodocs'],
} satisfies Meta<typeof UseDisclosureStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
