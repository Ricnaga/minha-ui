import { render, screen } from '@testing-library/react';
import { ModalActions } from '..';

describe('ModalActions', () => {
  it('should render correctly', () => {
    const { container } = render(<ModalActions />);
    expect(container).toMatchSnapshot();
  });

  it('should render action buttons', () => {
    render(<ModalActions />);
    expect(screen.getByText('Cancelar')).toBeInTheDocument();
    expect(screen.getByText('Confirmar')).toBeInTheDocument();
  });
});
