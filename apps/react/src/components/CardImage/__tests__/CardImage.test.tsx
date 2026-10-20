import { render, screen } from '@testing-library/react';
import { CardImage } from '..';

describe('CardImage', () => {
  it('should render card image correctly', () => {
    const { container } = render(
      <CardImage src="https://example.com/image.jpg" alt="Test image" />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should have correct src and alt', () => {
    render(<CardImage src="test.jpg" alt="My image" />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'test.jpg');
    expect(img).toHaveAttribute('alt', 'My image');
  });
});
