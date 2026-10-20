/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react-vite';

import { useState } from 'react';
import { fn } from 'storybook/test';
import { SliderMark } from '../../SliderMark/SliderMark';
import { SliderRange } from '../../SliderRange/SliderRange';
import { SliderThumb } from '../../SliderThumb/SliderThumb';
import { SliderTrack } from '../../SliderTrack/SliderTrack';
import { Slider } from '../Slider';
import type { SliderProps, SliderValue } from '../slider.types';
import { testDefaultSlider } from './Slider.play';

const meta: Meta<SliderProps> = {
  title: 'Components/Formularios/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  args: {
    min: 0,
    max: 100,
    step: 1,
    onValueChange: fn(),
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SliderProps>;

export const Default: Story = {
  render: (args) => (
    <div className="w-80">
      <Slider {...args}>
        <SliderTrack>
          <SliderRange />
          <SliderThumb />
        </SliderTrack>
      </Slider>
    </div>
  ),
  play: testDefaultSlider,
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState<SliderValue>(40);

    return (
      <div className="w-80">
        <p className="mb-4 text-sm">Valor atual: {value}</p>

        <Slider {...args} value={value} onValueChange={setValue}>
          <SliderTrack>
            <SliderRange />
            <SliderThumb aria-label="Nível" />
          </SliderTrack>
        </Slider>
      </div>
    );
  },
};

export const Range: Story = {
  render: (args) => (
    <div className="w-80">
      <Slider {...args} defaultValue={[20, 70]}>
        <SliderTrack>
          <SliderRange />
          <SliderThumb index={0} aria-label="Valor mínimo" />
          <SliderThumb index={1} aria-label="Valor máximo" />
        </SliderTrack>
      </Slider>
    </div>
  ),
};

export const WithMarks: Story = {
  render: (args) => (
    <div className="w-80 pt-2 pb-8">
      <Slider {...args} defaultValue={50}>
        <SliderTrack>
          <SliderRange />
          <SliderThumb />
          <SliderMark value={0} label="0" />
          <SliderMark value={25} label="25" />
          <SliderMark value={50} label="50" />
          <SliderMark value={75} label="75" />
          <SliderMark value={100} label="100" />
        </SliderTrack>
      </Slider>
    </div>
  ),
};

export const WithValueBubble: Story = {
  render: (args) => (
    <div className="w-80">
      <Slider {...args} defaultValue={65} showValue>
        <SliderTrack>
          <SliderRange />
          <SliderThumb aria-label="Volume" />
        </SliderTrack>
      </Slider>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex w-80 flex-col gap-10">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Slider {...args} key={size} size={size} defaultValue={40}>
          <SliderTrack>
            <SliderRange />
            <SliderThumb aria-label={`Tamanho ${size}`} />
          </SliderTrack>
        </Slider>
      ))}
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div className="flex w-80 flex-col gap-8">
      {(
        ['primary', 'secondary', 'success', 'info', 'warning', 'error'] as const
      ).map((color) => (
        <Slider {...args} key={color} color={color} defaultValue={40}>
          <SliderTrack>
            <SliderRange />
            <SliderThumb aria-label={`Cor ${color}`} />
          </SliderTrack>
        </Slider>
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <div className="w-80">
      <Slider {...args} defaultValue={30} disabled>
        <SliderTrack>
          <SliderRange />
          <SliderThumb aria-label="Desabilitado" />
        </SliderTrack>
      </Slider>
    </div>
  ),
};
