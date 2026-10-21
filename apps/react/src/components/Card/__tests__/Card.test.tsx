import { render, screen } from '@testing-library/react';
import { Card } from '..';

describe('Card', () => {
  it('should render card correctly', () => {
    const { container } = render(<Card>Card Content</Card>);
    expect(container).toMatchSnapshot();
  });

  it('should render card with children', () => {
    render(<Card>Test Content</Card>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should apply responsive width and padding classes', () => {
    const { container } = render(<Card>Card Content</Card>);
    const card = container.firstElementChild;

    expect(card).toHaveClass('min-w-0', 'p-3');
    expect(card).toHaveClass('sm:min-w-60', 'sm:p-4');
  });
});
