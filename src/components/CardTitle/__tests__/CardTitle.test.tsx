import { render, screen } from '@testing-library/react';
import { CardTitle } from '..';

describe('CardTitle', () => {
  it('should render card title correctly', () => {
    const { container } = render(<CardTitle>Title text</CardTitle>);
    expect(container).toMatchSnapshot();
  });

  it('should render children', () => {
    render(<CardTitle>My Title</CardTitle>);
    expect(screen.getByText('My Title')).toBeInTheDocument();
  });
});
