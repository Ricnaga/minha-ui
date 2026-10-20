import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EmptyState } from '..';
import { DEFAULT_EMPTY_MESSAGE } from '../useEmptyState';

describe('EmptyState', () => {
  describe('Message', () => {
    it('should render the default message when message is omitted', () => {
      render(<EmptyState />);
      expect(screen.getByText(DEFAULT_EMPTY_MESSAGE)).toBeInTheDocument();
    });

    it('should render a custom message', () => {
      render(<EmptyState message="Tente novamente mais tarde" />);
      expect(
        screen.getByText('Tente novamente mais tarde'),
      ).toBeInTheDocument();
      expect(screen.queryByText(DEFAULT_EMPTY_MESSAGE)).not.toBeInTheDocument();
    });

    it('should hide the message when message is null', () => {
      render(<EmptyState message={null} />);
      expect(screen.queryByText(DEFAULT_EMPTY_MESSAGE)).not.toBeInTheDocument();
    });
  });

  describe('Image', () => {
    it('should render the default image when image is omitted', () => {
      const { container } = render(<EmptyState />);
      expect(container.querySelector('svg')).toBeInTheDocument();
    });

    it('should hide the image when image is null', () => {
      const { container } = render(<EmptyState image={null} />);
      expect(container.querySelector('svg')).not.toBeInTheDocument();
    });

    it('should render a custom image', () => {
      render(<EmptyState image={<img src="/x.png" alt="Ilustração" />} />);
      expect(
        screen.getByRole('img', { name: 'Ilustração' }),
      ).toBeInTheDocument();
    });
  });

  describe('Title and action', () => {
    it('should render the title', () => {
      render(<EmptyState title="Nada por aqui" />);
      expect(screen.getByText('Nada por aqui')).toBeInTheDocument();
    });

    it('should render and handle the action', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <EmptyState
          action={<button onClick={handleClick}>Recarregar</button>}
        />,
      );

      await user.click(screen.getByRole('button', { name: 'Recarregar' }));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should not render the action when it is omitted', () => {
      render(<EmptyState />);
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });
  });

  describe('Rendering', () => {
    it('should render correctly', () => {
      const { container } = render(
        <EmptyState
          title="Sua sacola está vazia"
          message="Adicione itens para continuar."
          action={<button>Explorar</button>}
        />,
      );
      expect(container).toMatchSnapshot();
    });

    it('should merge a custom className on the root element', () => {
      const { container } = render(<EmptyState className="bg-red-500" />);
      expect(container.firstChild).toHaveClass('bg-red-500');
    });
  });
});
