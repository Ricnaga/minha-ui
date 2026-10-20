import { render, screen } from '@testing-library/react';
import { TransitionContainer } from '..';

const animations = [
  ['fade', 'fade-in', 'fade-out'],
  ['zoom', 'zoom-in-95', 'zoom-out-95'],
  ['slideFromTop', 'slide-in-from-top', 'slide-out-to-top'],
  ['slideFromBottom', 'slide-in-from-bottom', 'slide-out-to-bottom'],
  ['slideFromLeft', 'slide-in-from-left', 'slide-out-to-left'],
  ['slideFromRight', 'slide-in-from-right', 'slide-out-to-right'],
] as const;

describe('TransitionContainer', () => {
  describe('Rendering', () => {
    it('should render correctly', () => {
      const { container } = render(
        <TransitionContainer isOpen={true}>Conteúdo</TransitionContainer>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should render children', () => {
      render(
        <TransitionContainer isOpen={true}>
          Conteúdo animado
        </TransitionContainer>,
      );

      expect(screen.getByText('Conteúdo animado')).toBeInTheDocument();
    });

    it('should forward native props', () => {
      render(
        <TransitionContainer
          isOpen={true}
          data-testid="transition"
          id="hero"
        />,
      );

      expect(screen.getByTestId('transition')).toHaveAttribute('id', 'hero');
    });

    it('should merge the consumer className', () => {
      const { container } = render(
        <TransitionContainer isOpen={true} className="mt-4">
          Conteúdo
        </TransitionContainer>,
      );

      const transition = container.firstElementChild;

      expect(transition).toHaveClass('mt-4');
      expect(transition).toHaveClass('animate-in');
    });
  });

  describe('Visibility', () => {
    it('should run the enter animation when open', () => {
      const { container } = render(
        <TransitionContainer isOpen={true}>Conteúdo</TransitionContainer>,
      );

      const transition = container.firstElementChild;

      expect(transition).toHaveClass('animate-in', 'fade-in');
      expect(transition).not.toHaveAttribute('aria-hidden');
      expect(transition).not.toHaveAttribute('inert');
    });

    it('should run the exit animation and hide from assistive tech when closed', () => {
      const { container } = render(
        <TransitionContainer isOpen={false}>Conteúdo</TransitionContainer>,
      );

      const transition = container.firstElementChild;

      expect(transition).toHaveClass('animate-out', 'fade-out');
      expect(transition).toHaveAttribute('aria-hidden', 'true');
      expect(transition).toHaveAttribute('inert');
    });

    it('should allow overriding aria-hidden and inert', () => {
      const { container } = render(
        <TransitionContainer isOpen={false} aria-hidden={false} inert={false}>
          Conteúdo
        </TransitionContainer>,
      );

      const transition = container.firstElementChild;

      // `aria-hidden` é serializado como string; `inert` é um atributo booleano
      expect(transition).toHaveAttribute('aria-hidden', 'false');
      expect(transition).not.toHaveAttribute('inert');
    });
  });

  describe('Animations', () => {
    it.each(animations)(
      'should apply the %s animation pair',
      (animation, enterClass, exitClass) => {
        const { container, rerender } = render(
          <TransitionContainer isOpen={true} animation={animation}>
            Conteúdo
          </TransitionContainer>,
        );

        expect(container.firstElementChild).toHaveClass(
          'animate-in',
          enterClass,
        );

        rerender(
          <TransitionContainer isOpen={false} animation={animation}>
            Conteúdo
          </TransitionContainer>,
        );

        expect(container.firstElementChild).toHaveClass(
          'animate-out',
          exitClass,
        );
      },
    );

    it('should compose multiple animations', () => {
      const { container, rerender } = render(
        <TransitionContainer
          isOpen={true}
          animation={['fade', 'slideFromBottom']}
        >
          Conteúdo
        </TransitionContainer>,
      );

      const transition = container.firstElementChild;

      expect(transition).toHaveClass('animate-in', 'fade-in');
      expect(transition).toHaveClass('slide-in-from-bottom');

      rerender(
        <TransitionContainer
          isOpen={false}
          animation={['fade', 'slideFromBottom']}
        >
          Conteúdo
        </TransitionContainer>,
      );

      expect(transition).toHaveClass('animate-out', 'fade-out');
      expect(transition).toHaveClass('slide-out-to-bottom');
    });
  });
});
