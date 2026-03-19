import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '..';

describe('Button', () => {
  describe('Rendering', () => {
    it('should render button correctly', () => {
      const { container } = render(<Button>Click me</Button>);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Interactions', () => {
    it('should call onClick when clicked', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Click me</Button>);

      await user.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should not call onClick when disabled', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(
        <Button disabled onClick={handleClick}>
          Click me
        </Button>,
      );

      await user.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });
});
