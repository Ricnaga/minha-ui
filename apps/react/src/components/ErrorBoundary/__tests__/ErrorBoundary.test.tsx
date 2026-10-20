import { render, screen } from '@testing-library/react';

import { ErrorBoundary } from '..';

const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div>;
};

describe('ErrorBoundary', () => {
  it('should render correctly', () => {
    const { container } = render(
      <ErrorBoundary fallbackRender={() => <div>Error</div>}>
        <div>Content</div>
      </ErrorBoundary>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render children', () => {
    render(
      <ErrorBoundary fallbackRender={() => <div>Error</div>}>
        <div>Content</div>
      </ErrorBoundary>,
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('should call onError when error occurs', () => {
    const handleError = vi.fn();

    render(
      <ErrorBoundary
        onError={handleError}
        fallbackRender={() => <div>Error</div>}
      >
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>,
    );

    expect(handleError).toHaveBeenCalled();
  });
});
