import { render } from '@testing-library/react';
import { Skeleton } from '..';

describe('Skeleton', () => {
  describe('Rendering', () => {
    it('should render skeleton correctly', () => {
      const { container } = render(<Skeleton />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Shapes', () => {
    it('should render with square shape', () => {
      const { container } = render(<Skeleton shape="square" />);
      expect(container).toMatchSnapshot();
    });

    it('should render with rounded shape', () => {
      const { container } = render(<Skeleton shape="rounded" />);
      expect(container).toMatchSnapshot();
    });

    it('should render with circle shape', () => {
      const { container } = render(<Skeleton shape="circle" />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Custom Styling', () => {
    it('should render with custom className', () => {
      const { container } = render(<Skeleton className="w-32 h-4" />);
      expect(container).toMatchSnapshot();
    });

    it('should render with custom style', () => {
      const { container } = render(
        <Skeleton style={{ width: '200px', height: '20px' }} />,
      );
      expect(container).toMatchSnapshot();
    });
  });
});
