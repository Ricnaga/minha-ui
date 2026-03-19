import { render, screen } from '@testing-library/react';
import { Modal } from '..';

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
});
