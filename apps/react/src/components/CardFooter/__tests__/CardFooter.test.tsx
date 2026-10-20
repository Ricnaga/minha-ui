import { render, screen } from '@testing-library/react';
import { CardFooter } from '..';

describe('CardFooter', () => {
  it('should render card footer correctly', () => {
    const { container } = render(<CardFooter />);
    expect(container).toMatchSnapshot();
  });

  it('should render children', () => {
    render(
      <CardFooter>
        <div>Footer Content</div>
      </CardFooter>,
    );
    expect(screen.getByText('Footer Content')).toBeInTheDocument();
  });
});
