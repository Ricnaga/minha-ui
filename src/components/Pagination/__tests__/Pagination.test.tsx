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

    it('should display current page and total pages', () => {
      render(<Pagination {...defaultProps} />);
      expect(screen.getByText('Página 1 de 5')).toBeInTheDocument();
    });
  });

  describe('Navigation', () => {
    it('should go to next page', async () => {
      const user = userEvent.setup();
      render(<Pagination {...defaultProps} />);

      await user.click(screen.getByLabelText('Próxima página'));
      expect(defaultProps.onPageChange).toHaveBeenCalledWith(2);
    });

    it('should go to previous page', async () => {
      const user = userEvent.setup();
      render(<Pagination {...defaultProps} />);
      const prevButton = screen.getByLabelText('Página anterior');

      await user.click(prevButton);
      expect(defaultProps.onPageChange).not.toHaveBeenCalled();
    });

    it('should not go before first page', async () => {
      const user = userEvent.setup();
      render(<Pagination {...defaultProps} />);

      await user.click(screen.getByLabelText('Página anterior'));
      expect(defaultProps.onPageChange).not.toHaveBeenCalled();
    });

    it('should not go after last page', async () => {
      const user = userEvent.setup();
      render(<Pagination {...defaultProps} />);
      const nextButton = screen.getByLabelText('Próxima página');

      for (let i = 0; i < 6; i++) {
        await user.click(nextButton);
      }
      expect(defaultProps.onPageChange).toHaveBeenCalledWith(5);
    });
  });

  describe('Page Selection', () => {
    it('should render page buttons', () => {
      render(<Pagination {...defaultProps} />);
      expect(screen.getByRole('button', { name: '1' })).toBeInTheDocument();
    });
  });
});
