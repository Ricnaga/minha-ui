import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ErrorState } from '..';
import { DEFAULT_ERROR_MESSAGE } from '../useErrorState';

describe('ErrorState', () => {
  describe('Message', () => {
    it('should render the default message when message is omitted', () => {
      render(<ErrorState />);
      expect(screen.getByText(DEFAULT_ERROR_MESSAGE)).toBeInTheDocument();
    });

    it('should render a custom message', () => {
      render(<ErrorState message="Falha ao carregar os dados" />);
      expect(
        screen.getByText('Falha ao carregar os dados'),
      ).toBeInTheDocument();
      expect(screen.queryByText(DEFAULT_ERROR_MESSAGE)).not.toBeInTheDocument();
    });

    it('should hide the message when message is null', () => {
      render(<ErrorState message={null} />);
      expect(screen.queryByText(DEFAULT_ERROR_MESSAGE)).not.toBeInTheDocument();
    });
  });

  describe('Image', () => {
    it('should render the default image when image is omitted', () => {
      const { container } = render(<ErrorState />);
      expect(container.querySelector('svg')).toBeInTheDocument();
    });

    it('should hide the image when image is null', () => {
      const { container } = render(<ErrorState image={null} />);
      expect(container.querySelector('svg')).not.toBeInTheDocument();
    });

    it('should render a custom image', () => {
      render(<ErrorState image={<img src="/x.png" alt="Ilustração" />} />);
      expect(
        screen.getByRole('img', { name: 'Ilustração' }),
      ).toBeInTheDocument();
    });
  });

  describe('Title and action', () => {
    it('should render the title', () => {
      render(<ErrorState title="Erro inesperado" />);
      expect(screen.getByText('Erro inesperado')).toBeInTheDocument();
    });

    it('should render and handle the action', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <ErrorState
          action={<button onClick={handleClick}>Tentar novamente</button>}
        />,
      );

      await user.click(
        screen.getByRole('button', { name: 'Tentar novamente' }),
      );
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should not render the action when it is omitted', () => {
      render(<ErrorState />);
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });
  });

  describe('Rendering', () => {
    it('should render correctly', () => {
      const { container } = render(
        <ErrorState
          title="Falha ao carregar"
          message="Ocorreu um erro ao buscar os dados."
          action={<button>Tentar novamente</button>}
        />,
      );
      expect(container).toMatchSnapshot();
    });

    it('should merge a custom className on the root element', () => {
      const { container } = render(<ErrorState className="bg-red-500" />);
      expect(container.firstChild).toHaveClass('bg-red-500');
    });
  });
});
