import { render, screen } from '@testing-library/react';
import { Spinner } from '..';

describe('Spinner', () => {
  it('should render spinner correctly', () => {
    const { container } = render(<Spinner />);
    expect(container).toMatchSnapshot();
  });

  it('should render with role status and aria-busy', () => {
    render(<Spinner />);
    const spinner = screen.getByRole('status');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveAttribute('aria-busy', 'true');
  });
});
