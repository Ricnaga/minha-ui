import { render } from '@testing-library/react';
import { Divider } from '..';

describe('Divider', () => {
  describe('Rendering', () => {
    it('should render divider correctly', () => {
      const { container } = render(<Divider />);
      expect(container).toMatchSnapshot();
    });

    it('should render divider', () => {
      const { container } = render(<Divider />);
      expect(container.querySelector('[class*="h-px"]')).toBeInTheDocument();
    });
  });
});
