import { render, screen } from '@testing-library/react';
import { Modal } from '..';

describe('Modal', () => {
  describe('Rendering', () => {
    it('should render modal correctly when closed', () => {
      const { container } = render(
        <Modal isOpen={false} onClose={vi.fn()}>
          Modal Content
        </Modal>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should render modal correctly when open', () => {
      const { container } = render(
        <Modal isOpen={true} onClose={vi.fn()}>
          Modal Content
        </Modal>,
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('States', () => {
    it('should render children when open', () => {
      render(
        <Modal isOpen={true} onClose={vi.fn()}>
          Modal Content
        </Modal>,
      );
      expect(screen.getByText('Modal Content')).toBeInTheDocument();
    });
  });
});
