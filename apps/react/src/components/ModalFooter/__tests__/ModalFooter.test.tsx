import { render, screen } from '@testing-library/react';
import { ModalFooter } from '..';

describe('ModalFooter', () => {
  it('should render correctly', () => {
    const { container } = render(<ModalFooter />);
    expect(container).toMatchSnapshot();
  });

  it('should render footer', () => {
    render(<ModalFooter />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
