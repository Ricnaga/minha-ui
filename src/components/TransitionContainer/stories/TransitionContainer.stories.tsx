import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import type { TransitionContainerProps } from '../transition-container.types';
import { TransitionContainer } from '../TransitionContainer';
import { testDefaultTransitionContainer } from './TransitionContainer.play';

function TransitionDemo({ isOpen, ...props }: TransitionContainerProps) {
  const [isVisible, setIsVisible] = useState(isOpen);

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        type="button"
        onClick={() => setIsVisible((previous) => !previous)}
        className="rounded bg-neutral-700 px-3 py-1 text-sm text-neutral-100"
      >
        Alternar
      </button>
      <div className="flex h-40 w-72 items-center justify-center overflow-hidden rounded border border-dashed border-neutral-600">
        <TransitionContainer
          {...props}
          isOpen={isVisible}
          data-testid="transition-container"
        />
      </div>
    </div>
  );
}

const meta: Meta<TransitionContainerProps> = {
  title: 'Components/Estruturas/TransitionContainer',
  component: TransitionContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      description: 'Controla a entrada (`true`) e a saída (`false`).',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        category: 'State',
      },
    },
    animation: {
      description:
        'Efeitos de entrada/saída. Aceita um efeito ou um array para combiná-los.',
      control: { type: 'check' },
      options: [
        'fade',
        'zoom',
        'slideFromTop',
        'slideFromBottom',
        'slideFromLeft',
        'slideFromRight',
      ],
      table: {
        type: {
          summary: `"fade" | "zoom" | "slideFromTop" | "slideFromBottom"
            | "slideFromLeft" | "slideFromRight" | TransitionEffect[]`,
        },
        defaultValue: { summary: "['fade']" },
        category: 'Style',
      },
    },
    children: {
      control: false,
      table: {
        type: { summary: 'ReactNode' },
        category: 'Content',
      },
    },
  },
  args: {
    isOpen: true,
    animation: ['fade'],
    children: (
      <span className="rounded bg-neutral-800 px-6 py-4 text-neutral-100">
        Conteúdo animado
      </span>
    ),
  },
};

export default meta;
type Story = StoryObj<TransitionContainerProps>;

export const Default: Story = {
  render: (args) => <TransitionDemo {...args} />,
  play: testDefaultTransitionContainer,
};

export const Zoom: Story = {
  args: { animation: ['zoom'] },
  render: (args) => <TransitionDemo {...args} />,
};

export const SlideFromBottom: Story = {
  args: { animation: ['slideFromBottom'] },
  render: (args) => <TransitionDemo {...args} />,
};

export const Composed: Story = {
  args: { animation: ['fade', 'slideFromBottom'] },
  render: (args) => <TransitionDemo {...args} />,
};
