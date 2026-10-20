import { render, screen } from '@testing-library/react';
import { ModalContainer } from '..';

describe('ModalContainer', () => {
  it('should render correctly', () => {
    const { container } = render(<ModalContainer />);
    expect(container).toMatchSnapshot();
  });

  it('should render dialog', () => {
    render(<ModalContainer />);
    expect(screen.getByTestId('modal-container')).toBeInTheDocument();
  });
});
