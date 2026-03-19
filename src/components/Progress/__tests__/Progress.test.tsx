import { render } from '@testing-library/react';
import { Progress } from '..';

describe('Progress', () => {
  describe('Rendering', () => {
    it('should render progress correctly', () => {
      const { container } = render(<Progress value={50} />);
      expect(container).toMatchSnapshot();
    });

    it('should render progress', () => {
      const { container } = render(<Progress value={50} />);
      expect(container.querySelector('[class*="w-full"]')).toBeInTheDocument();
    });
  });
});
