import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import { Select } from '..';
import type { SelectOptions } from '../select.types';

const mockOptions: SelectOptions[] = [
  { key: 1, value: 'Option 1' },
  { key: 2, value: 'Option 2' },
  { key: 3, value: 'Option 3' },
];

const TestSelect = () => {
  const [selected, setSelected] = useState<SelectOptions[]>([]);

  return (
    <Select
      options={mockOptions}
      defaultValue={selected}
      onSelectChange={setSelected}
    />
  );
};

describe('Select', () => {
  describe('Rendering', () => {
    it('should render select with input', () => {
      render(<TestSelect />);
      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
    });
  });

  describe('Options', () => {
    it('should render with options available', () => {
      render(<TestSelect />);
      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
    });
  });

  describe('Multiple Selection', () => {
    it('should render with multiple selection', () => {
      render(
        <Select
          options={mockOptions}
          defaultValue={[]}
          onSelectChange={() => {}}
          isMultiple
        />,
      );
      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
    });
  });

  describe('Render Chips', () => {
    it('should render with chips enabled', () => {
      render(
        <Select
          options={mockOptions}
          defaultValue={[mockOptions[0]]}
          onSelectChange={() => {}}
          isMultiple
          isRenderChips
        />,
      );
      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
    });
  });
});
