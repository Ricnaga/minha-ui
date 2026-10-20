import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from '..';
import { ModalHeader } from '../../ModalHeader/ModalHeader';

describe('Modal', () => {
  it('should render correctly when open', () => {
    const { container } = render(
      <Modal isOpen={true} onClose={vi.fn()}>
        Modal Content
      </Modal>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render modal content', () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()}>
        Modal Content
      </Modal>,
    );
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('should call onClose when the header close button is clicked', async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();

    render(
      <Modal isOpen={true} onClose={handleClose}>
        <ModalHeader>Modal Title</ModalHeader>
      </Modal>,
    );

    await user.click(screen.getByRole('button', { name: 'Fechar' }));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
