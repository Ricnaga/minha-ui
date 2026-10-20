import { render } from '@testing-library/react';
import { TopLoadingBar } from '..';

describe('TopLoadingBar', () => {
  it('should render with progress greater than 0', () => {
    const { container } = render(<TopLoadingBar progress={50} />);
    expect(container).toMatchSnapshot();
  });

  it('should render null with 0% progress', () => {
    const { container } = render(<TopLoadingBar progress={0} />);
    expect(container.firstChild).toBeNull();
  });

  it('should set width based on progress', () => {
    const { container } = render(<TopLoadingBar progress={75} />);
    expect(container.firstChild).toHaveStyle({ width: '75%' });
  });
});
