import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pagination } from '..';

describe('Pagination', () => {
  const defaultProps = {
    totalPages: 5,
    onPageChange: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Rendering', () => {
    it('should render pagination correctly', () => {
      const { container } = render(<Pagination {...defaultProps} />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Interactions', () => {
    it('should navigate to next page', async () => {
      const user = userEvent.setup();
      render(<Pagination {...defaultProps} />);

      await user.click(screen.getByLabelText('Próxima página'));
      expect(defaultProps.onPageChange).toHaveBeenCalledWith(2);
    });

    it('should not navigate before first page', async () => {
      const user = userEvent.setup();
      render(<Pagination {...defaultProps} />);

      await user.click(screen.getByLabelText('Página anterior'));
      expect(defaultProps.onPageChange).not.toHaveBeenCalled();
    });
  });
});
