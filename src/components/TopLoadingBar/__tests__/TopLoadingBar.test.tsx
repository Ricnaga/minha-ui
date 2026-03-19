import { render } from '@testing-library/react';
import { TopLoadingBar } from '..';

describe('TopLoadingBar', () => {
  describe('Rendering', () => {
    it('should render with 0% progress as null', () => {
      const { container } = render(<TopLoadingBar progress={0} />);
      expect(container.firstChild).toBeNull();
    });

    it('should render with progress greater than 0', () => {
      const { container } = render(<TopLoadingBar progress={50} />);
      expect(container).toMatchSnapshot();
    });

    it('should render with 100% progress', () => {
      const { container } = render(<TopLoadingBar progress={100} />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Progress', () => {
    it('should set width based on progress', () => {
      const { container } = render(<TopLoadingBar progress={75} />);
      expect(container.firstChild).toHaveStyle({ width: '75%' });
    });

    it('should render with 1% progress', () => {
      const { container } = render(<TopLoadingBar progress={1} />);
      expect(container.firstChild).toHaveStyle({ width: '1%' });
    });

    it('should render with 99% progress', () => {
      const { container } = render(<TopLoadingBar progress={99} />);
      expect(container.firstChild).toHaveStyle({ width: '99%' });
    });
  });

  describe('Colors', () => {
    it('should render with primary color', () => {
      const { container } = render(
        <TopLoadingBar progress={50} color="primary" />,
      );
      expect(container).toMatchSnapshot();
    });

    it('should render with secondary color', () => {
      const { container } = render(
        <TopLoadingBar progress={50} color="secondary" />,
      );
      expect(container).toMatchSnapshot();
    });

    it('should render with success color', () => {
      const { container } = render(
        <TopLoadingBar progress={50} color="success" />,
      );
      expect(container).toMatchSnapshot();
    });

    it('should render with info color', () => {
      const { container } = render(
        <TopLoadingBar progress={50} color="info" />,
      );
      expect(container).toMatchSnapshot();
    });

    it('should render with warning color', () => {
      const { container } = render(
        <TopLoadingBar progress={50} color="warning" />,
      );
      expect(container).toMatchSnapshot();
    });

    it('should render with error color', () => {
      const { container } = render(
        <TopLoadingBar progress={50} color="error" />,
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('Custom Class', () => {
    it('should apply custom class', () => {
      const { container } = render(
        <TopLoadingBar progress={50} className="custom-class" />,
      );
      expect(container.firstChild).toHaveClass('custom-class');
    });
  });

  describe('Data Testid', () => {
    it('should have correct test id', () => {
      const { container } = render(<TopLoadingBar progress={50} />);
      expect(container.firstChild).toHaveAttribute(
        'data-testid',
        'top-loading-bar',
      );
    });
  });
});
