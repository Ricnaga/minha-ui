import { render, screen } from '@testing-library/react';
import { Badge } from '..';

describe('Badge', () => {
  describe('Rendering', () => {
    it('should render badge correctly', () => {
      const { container } = render(<Badge value="5" />);
      expect(container).toMatchSnapshot();
    });

    it('should render badge with value', () => {
      render(<Badge value="5" />);
      expect(screen.getByText('5')).toBeInTheDocument();
    });

    it('should not render badge when value is undefined', () => {
      const { container } = render(<Badge />);
      expect(container.querySelector('[class*="badge"]')).toBeNull();
    });
  });
});
