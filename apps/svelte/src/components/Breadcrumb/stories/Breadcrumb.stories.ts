import type { Meta, StoryObj } from '@storybook/svelte-vite';

import { testDefaultBreadcrumb } from './Breadcrumb.play';
import BreadcrumbStory from './BreadcrumbStory.svelte';

const meta = {
  title: 'Components/Estruturas/Breadcrumb',
  component: BreadcrumbStory,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof BreadcrumbStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: testDefaultBreadcrumb,
};

export const CustomSeparator: Story = {
  args: { separator: '/' },
};

export const WithIcons: Story = {
  args: { icons: true },
};

export const Sizes: Story = {
  args: { sizes: true },
};

export const Responsive: Story = {
  globals: { viewport: { value: 'mobile', isRotated: false } },
  parameters: { layout: 'padded' },
  args: { responsive: true },
};
