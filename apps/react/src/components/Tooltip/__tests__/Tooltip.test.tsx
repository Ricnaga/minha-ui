import { render, screen } from '@testing-library/react';
import { Tooltip } from '..';

describe('Tooltip', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Tooltip content="Tooltip content">
        <button>Hover me</button>
      </Tooltip>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render children', () => {
    render(
      <Tooltip content="Tooltip content">
        <button>Hover me</button>
      </Tooltip>,
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
