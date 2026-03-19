import { render, screen } from '@testing-library/react';
import { Badge } from '..';

describe('Badge', () => {
  describe('Rendering', () => {
    it('should render badge correctly', () => {
      const { container } = render(<Badge value="5" />);
      expect(container).toMatchSnapshot();
    });

    it('should render badge with children correctly', () => {
      const { container } = render(
        <Badge value="3">
          <span>Children</span>
        </Badge>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should render badge with custom value', () => {
      render(<Badge value="99+" />);
      expect(screen.getByText('99+')).toBeInTheDocument();
    });

    it('should not render badge when value is undefined', () => {
      const { container } = render(<Badge />);
      expect(container.querySelector('.relative')).toBeInTheDocument();
      expect(container.querySelector('[class*="badge"]')).toBeNull();
    });
  });

  describe('Colors', () => {
    it('should render with primary color', () => {
      const { container } = render(<Badge value="1" color="primary" />);
      expect(container).toMatchSnapshot();
    });

    it('should render with secondary color', () => {
      const { container } = render(<Badge value="1" color="secondary" />);
      expect(container).toMatchSnapshot();
    });

    it('should render with success color', () => {
      const { container } = render(<Badge value="1" color="success" />);
      expect(container).toMatchSnapshot();
    });

    it('should render with warning color', () => {
      const { container } = render(<Badge value="1" color="warning" />);
      expect(container).toMatchSnapshot();
    });

    it('should render with error color', () => {
      const { container } = render(<Badge value="1" color="error" />);
      expect(container).toMatchSnapshot();
    });

    it('should render with info color', () => {
      const { container } = render(<Badge value="1" color="info" />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Sizes', () => {
    it('should render with small size', () => {
      const { container } = render(<Badge value="1" size="small" />);
      expect(container).toMatchSnapshot();
    });

    it('should render with medium size', () => {
      const { container } = render(<Badge value="1" size="medium" />);
      expect(container).toMatchSnapshot();
    });

    it('should render with large size', () => {
      const { container } = render(<Badge value="1" size="large" />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Positions', () => {
    it('should render with topRight position', () => {
      const { container } = render(<Badge value="1" position="topRight" />);
      expect(container).toMatchSnapshot();
    });

    it('should render with topLeft position', () => {
      const { container } = render(<Badge value="1" position="topLeft" />);
      expect(container).toMatchSnapshot();
    });

    it('should render with bottomRight position', () => {
      const { container } = render(<Badge value="1" position="bottomRight" />);
      expect(container).toMatchSnapshot();
    });

    it('should render with bottomLeft position', () => {
      const { container } = render(<Badge value="1" position="bottomLeft" />);
      expect(container).toMatchSnapshot();
    });
  });
});
