import { render, screen } from '@testing-library/react';
import { RenderBoundary } from '../RenderBoundary';

describe('RenderBoundary', () => {
  describe('Default rendering', () => {
    it('should render children directly when no loading or error', () => {
      render(
        <RenderBoundary>
          <div data-testid="children">Children content</div>
        </RenderBoundary>,
      );

      expect(screen.getByTestId('children')).toBeInTheDocument();
    });
  });

  describe('Error state (ErrorBoundary)', () => {
    it('should show default error fallback when error occurs', () => {
      const ErrorComponent = () => {
        throw new Error('Test error');
      };

      render(
        <RenderBoundary>
          <ErrorComponent />
        </RenderBoundary>,
      );

      expect(screen.getByText('ocorreu um erro!')).toBeInTheDocument();
    });

    it('should show custom error fallback when errorProps.fallbackRender is provided', () => {
      const ErrorComponent = () => {
        throw new Error('Test error');
      };

      render(
        <RenderBoundary
          errorProps={{
            fallbackRender: ({ error }) => (
              <div data-testid="custom-error">
                Custom Error: {String(error)}
              </div>
            ),
          }}
        >
          <ErrorComponent />
        </RenderBoundary>,
      );

      expect(screen.getByTestId('custom-error')).toBeInTheDocument();
      expect(
        screen.getByText('Custom Error: Error: Test error'),
      ).toBeInTheDocument();
    });

    it('should show custom error fallback when errorProps.fallback is provided', () => {
      const ErrorComponent = () => {
        throw new Error('Test error');
      };

      render(
        <RenderBoundary
          errorProps={{
            fallback: (
              <div data-testid="custom-error">Custom error fallback</div>
            ),
          }}
        >
          <ErrorComponent />
        </RenderBoundary>,
      );

      expect(screen.getByTestId('custom-error')).toBeInTheDocument();
    });
  });

  describe('ErrorBoundary callbacks', () => {
    it('should pass onError callback to ErrorBoundary', () => {
      const onError = vi.fn();
      const ErrorComponent = () => {
        throw new Error('Test error');
      };

      render(
        <RenderBoundary
          errorProps={{
            fallbackRender: () => <div>Error</div>,
            onError,
          }}
        >
          <ErrorComponent />
        </RenderBoundary>,
      );

      expect(onError).toHaveBeenCalled();
    });

    it('should pass resetKeys to ErrorBoundary', () => {
      const resetKeys = ['key1', 'key2'];

      render(
        <RenderBoundary
          errorProps={{
            fallbackRender: () => <div>Error</div>,
            resetKeys,
          }}
        >
          <div>Content</div>
        </RenderBoundary>,
      );

      expect(screen.getByText('Content')).toBeInTheDocument();
    });
  });

  describe('Children without Suspense trigger', () => {
    it('should render children when no Suspense state is triggered', () => {
      render(
        <RenderBoundary loadingProps={{ fallback: <div>Loading</div> }}>
          <div data-testid="content">Content</div>
        </RenderBoundary>,
      );

      expect(screen.getByTestId('content')).toBeInTheDocument();
    });
  });
});
