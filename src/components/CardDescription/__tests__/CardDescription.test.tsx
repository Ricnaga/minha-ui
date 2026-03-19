import { render, screen } from '@testing-library/react';
import { CardDescription } from '..';

describe('CardDescription', () => {
  it('should render card description correctly', () => {
    const { container } = render(
      <CardDescription>Description text</CardDescription>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render children', () => {
    render(<CardDescription>My description</CardDescription>);
    expect(screen.getByText('My description')).toBeInTheDocument();
  });
});
