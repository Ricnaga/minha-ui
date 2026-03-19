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
});
