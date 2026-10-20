import { render, screen } from '@testing-library/react';
import { CardSubtitle } from '..';

describe('CardSubtitle', () => {
  it('should render card subtitle correctly', () => {
    const { container } = render(<CardSubtitle>Subtitle text</CardSubtitle>);
    expect(container).toMatchSnapshot();
  });

  it('should render children', () => {
    render(<CardSubtitle>My subtitle</CardSubtitle>);
    expect(screen.getByText('My subtitle')).toBeInTheDocument();
  });
});
