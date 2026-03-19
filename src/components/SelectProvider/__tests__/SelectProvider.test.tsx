import { render, screen } from '@testing-library/react';
import { SelectProvider } from '..';
import { vi } from 'vitest';

describe('SelectProvider', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <SelectProvider
        options={[{ key: '1', value: 'Option 1' }]}
        defaultValue={[]}
        onSelectChange={vi.fn()}
      >
        <div>Content</div>
      </SelectProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render children', () => {
    render(
      <SelectProvider
        options={[{ key: '1', value: 'Option 1' }]}
        defaultValue={[]}
        onSelectChange={vi.fn()}
      >
        <div>Content</div>
      </SelectProvider>,
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
