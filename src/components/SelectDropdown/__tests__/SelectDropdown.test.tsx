import { render } from '@testing-library/react';
import { SelectProvider } from '../../SelectProvider/SelectProvider';
import { SelectDropdown } from '..';
import { vi } from 'vitest';

describe('SelectDropdown', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <SelectProvider
        options={[{ key: '1', value: 'Option 1' }]}
        defaultValue={[]}
        onSelectChange={vi.fn()}
      >
        <SelectDropdown />
      </SelectProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render listbox', () => {
    const { container } = render(
      <SelectProvider
        options={[{ key: '1', value: 'Option 1' }]}
        defaultValue={[]}
        onSelectChange={vi.fn()}
      >
        <SelectDropdown />
      </SelectProvider>,
    );
    expect(container.firstChild).toBeInTheDocument();
  });
});
