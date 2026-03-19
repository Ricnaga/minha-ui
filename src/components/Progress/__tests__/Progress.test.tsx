import { render } from '@testing-library/react';
import { Progress } from '..';

describe('Progress', () => {
  describe('Rendering', () => {
    it('should render progress correctly', () => {
      const { container } = render(<Progress value={50} />);
      expect(container).toMatchSnapshot();
    });

    it('should render with value 0', () => {
      const { container } = render(<Progress value={0} />);
      expect(container).toMatchSnapshot();
    });

    it('should render with value 100', () => {
      const { container } = render(<Progress value={100} />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Sizes', () => {
    it('should render with small size', () => {
      const { container } = render(<Progress value={50} size="sm" />);
      expect(container).toMatchSnapshot();
    });

    it('should render with medium size', () => {
      const { container } = render(<Progress value={50} size="md" />);
      expect(container).toMatchSnapshot();
    });

    it('should render with large size', () => {
      const { container } = render(<Progress value={50} size="lg" />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Colors', () => {
    it('should render with primary color', () => {
      const { container } = render(<Progress value={50} color="primary" />);
      expect(container).toMatchSnapshot();
    });

    it('should render with secondary color', () => {
      const { container } = render(<Progress value={50} color="secondary" />);
      expect(container).toMatchSnapshot();
    });

    it('should render with success color', () => {
      const { container } = render(<Progress value={50} color="success" />);
      expect(container).toMatchSnapshot();
    });

    it('should render with info color', () => {
      const { container } = render(<Progress value={50} color="info" />);
      expect(container).toMatchSnapshot();
    });

    it('should render with warning color', () => {
      const { container } = render(<Progress value={50} color="warning" />);
      expect(container).toMatchSnapshot();
    });

    it('should render with error color', () => {
      const { container } = render(<Progress value={50} color="error" />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Animation', () => {
    it('should render with animation enabled', () => {
      const { container } = render(<Progress value={50} animated={true} />);
      expect(container).toMatchSnapshot();
    });

    it('should render without animation', () => {
      const { container } = render(<Progress value={50} animated={false} />);
      expect(container).toMatchSnapshot();
    });
  });
});
