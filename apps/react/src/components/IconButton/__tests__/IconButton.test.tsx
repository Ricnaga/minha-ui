import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HouseIcon } from '@phosphor-icons/react';
import { IconButton } from '..';

describe('IconButton', () => {
  describe('Rendering', () => {
    it('should render icon button correctly', () => {
      const { container } = render(
        <IconButton aria-label="Home">
          <HouseIcon />
        </IconButton>,
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('Interactions', () => {
    it('should call onClick when clicked', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(
        <IconButton onClick={handleClick} aria-label="Click">
          <HouseIcon />
        </IconButton>,
      );

      await user.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
