import { render } from '@testing-library/react';
import { ToastContainer } from '..';

describe('ToastContainer', () => {
  it('should render correctly', () => {
    const { container } = render(
      <ToastContainer>
        <div>App Content</div>
      </ToastContainer>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render children', () => {
    const { container } = render(
      <ToastContainer>
        <div>App Content</div>
      </ToastContainer>,
    );
    expect(container.textContent).toContain('App Content');
  });
});
