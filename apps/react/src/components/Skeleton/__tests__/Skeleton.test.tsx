import { render } from '@testing-library/react';
import { Skeleton } from '..';

describe('Skeleton', () => {
  describe('Rendering', () => {
    it('should render skeleton correctly', () => {
      const { container } = render(<Skeleton />);
      expect(container).toMatchSnapshot();
    });

    it('should render skeleton', () => {
      const { container } = render(<Skeleton />);
      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
