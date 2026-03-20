import { render, screen } from '@testing-library/react';
import { DataBoundary } from '../DataBoundary';

describe('DataBoundary', () => {
  describe('Snapshot', () => {
    it('should match snapshot with children', () => {
      const { container } = render(
        <DataBoundary>
          <div>Content</div>
        </DataBoundary>,
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe('Loading state', () => {
    it('should render children when not loading', () => {
      render(
        <DataBoundary data="test-data">
          <div>Content</div>
        </DataBoundary>,
      );

      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('should show default loading text when isLoading is true', () => {
      render(
        <DataBoundary loadingProps={{ isLoading: true }}>
          <div>Content</div>
        </DataBoundary>,
      );

      expect(screen.getByText('carregando...')).toBeInTheDocument();
    });

    it('should show custom loading fallback when provided', () => {
      render(
        <DataBoundary
          loadingProps={{
            isLoading: true,
            fallback: <div data-testid="custom-loading">Custom loading</div>,
          }}
        >
          <div>Content</div>
        </DataBoundary>,
      );

      expect(screen.getByTestId('custom-loading')).toBeInTheDocument();
    });
  });

  describe('Error state', () => {
    it('should show default error text when isError is true', () => {
      render(
        <DataBoundary errorProps={{ isError: true }}>
          <div>Content</div>
        </DataBoundary>,
      );

      expect(screen.getByText('ocorreu um erro!')).toBeInTheDocument();
    });

    it('should show custom error fallback when provided', () => {
      render(
        <DataBoundary
          errorProps={{
            isError: true,
            fallback: <div data-testid="custom-error">Custom error</div>,
          }}
        >
          <div>Content</div>
        </DataBoundary>,
      );

      expect(screen.getByTestId('custom-error')).toBeInTheDocument();
    });
  });

  describe('Data rendering', () => {
    it('should render children when data is provided', () => {
      render(
        <DataBoundary data="test-data">
          <div>Content</div>
        </DataBoundary>,
      );

      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('should render children function with data', () => {
      render(
        <DataBoundary
          data={{ name: 'John', email: 'john@example.com' }}
          children={({ data }) => (
            <div>
              <span>{data.name}</span>
              <span>{data.email}</span>
            </div>
          )}
        />,
      );

      expect(screen.getByText('John')).toBeInTheDocument();
      expect(screen.getByText('john@example.com')).toBeInTheDocument();
    });

    it('should render null when no data and not loading/error', () => {
      const { container } = render(
        <DataBoundary>
          <div>Content</div>
        </DataBoundary>,
      );

      expect(container.firstChild?.textContent).toBe('');
    });
  });

  describe('Priority order', () => {
    it('should show error over loading when both are true', () => {
      render(
        <DataBoundary
          loadingProps={{ isLoading: true }}
          errorProps={{ isError: true }}
        >
          <div>Content</div>
        </DataBoundary>,
      );

      expect(screen.getByText('ocorreu um erro!')).toBeInTheDocument();
    });

    it('should show loading over data when both are true', () => {
      render(
        <DataBoundary data="test-data" loadingProps={{ isLoading: true }}>
          <div>Content</div>
        </DataBoundary>,
      );

      expect(screen.getByText('carregando...')).toBeInTheDocument();
    });
  });
});
