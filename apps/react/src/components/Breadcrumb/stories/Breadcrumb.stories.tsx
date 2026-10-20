import type { Meta, StoryObj } from '@storybook/react-vite';

import { HouseIcon } from '@phosphor-icons/react';
import { Breadcrumb } from '../Breadcrumb';
import type { BreadcrumbProps } from '../breadcrumb.types';
import { BreadcrumbItem } from '../../BreadcrumbItem/BreadcrumbItem';
import { BreadcrumbLink } from '../../BreadcrumbLink/BreadcrumbLink';
import { BreadcrumbList } from '../../BreadcrumbList/BreadcrumbList';
import { BreadcrumbPage } from '../../BreadcrumbPage/BreadcrumbPage';
import { BreadcrumbSeparator } from '../../BreadcrumbSeparator/BreadcrumbSeparator';
import { testDefaultBreadcrumb } from './Breadcrumb.play';

const meta: Meta<BreadcrumbProps> = {
  title: 'Components/Estruturas/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<BreadcrumbProps>;

export const Default: Story = {
  render: (args) => (
    <div className="w-96">
      <Breadcrumb {...args}>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/produtos">Produtos</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Detalhes</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  ),
  play: testDefaultBreadcrumb,
};

export const CustomSeparator: Story = {
  args: {
    separator: '/',
  },
  render: (args) => (
    <div className="w-96">
      <Breadcrumb {...args}>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/produtos">Produtos</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Detalhes</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  ),
};

export const WithIcons: Story = {
  render: (args) => (
    <div className="w-96">
      <Breadcrumb {...args}>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/"
              className="inline-flex items-center gap-1.5"
            >
              <HouseIcon aria-hidden="true" />
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/produtos">Produtos</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Detalhes</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex w-96 flex-col gap-6">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Breadcrumb
          {...args}
          key={size}
          size={size}
          aria-label={`Breadcrumb ${size}`}
        >
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Detalhes ({size})</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      ))}
    </div>
  ),
};
