import { render, screen } from '@testing-library/react';
import { Focustrap } from '..';

describe('Focustrap', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Focustrap isFocus={false}>
        <div>Content</div>
      </Focustrap>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render children', () => {
    render(
      <Focustrap isFocus={false}>
        <div>Content</div>
      </Focustrap>,
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
