import { render, screen } from '@testing-library/react';
import { Backdrop } from '..';

describe('Backdrop', () => {
  it('should render correctly', () => {
    const { container } = render(<Backdrop isOpen={true}>Content</Backdrop>);
    expect(container).toMatchSnapshot();
  });

  it('should render children', () => {
    render(<Backdrop isOpen={true}>Modal Content</Backdrop>);
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });
});
