import { render } from '@testing-library/react';
import { Divider } from '..';

describe('Divider', () => {
  describe('Rendering', () => {
    it('should render divider correctly', () => {
      const { container } = render(<Divider />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Orientation', () => {
    it('should render with horizontal orientation', () => {
      const { container } = render(<Divider orientation="horizontal" />);
      expect(container).toMatchSnapshot();
    });

    it('should render with vertical orientation', () => {
      const { container } = render(<Divider orientation="vertical" />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Inset', () => {
    it('should render with none inset', () => {
      const { container } = render(<Divider inset="none" />);
      expect(container).toMatchSnapshot();
    });

    it('should render with left inset', () => {
      const { container } = render(<Divider inset="left" />);
      expect(container).toMatchSnapshot();
    });

    it('should render with right inset', () => {
      const { container } = render(<Divider inset="right" />);
      expect(container).toMatchSnapshot();
    });

    it('should render with center inset', () => {
      const { container } = render(<Divider inset="center" />);
      expect(container).toMatchSnapshot();
    });
  });
});
