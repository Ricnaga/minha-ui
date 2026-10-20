import { render, screen } from '@testing-library/react';
import { Select } from '..';
import { vi } from 'vitest';
import type { SelectOptions } from '../select.types';

const mockOptions: SelectOptions[] = [
  { key: 1, value: 'Option 1' },
  { key: 2, value: 'Option 2' },
  { key: 3, value: 'Option 3' },
];

describe('Select', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Select
        options={mockOptions}
        defaultValue={[]}
        onSelectChange={vi.fn()}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render input', () => {
    render(
      <Select
        options={mockOptions}
        defaultValue={[]}
        onSelectChange={vi.fn()}
      />,
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
