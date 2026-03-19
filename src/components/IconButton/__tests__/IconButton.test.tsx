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

    it('should render icon button with icon', () => {
      render(
        <IconButton aria-label="Home">
          <HouseIcon />
        </IconButton>,
      );
      expect(screen.getByLabelText('Home')).toBeInTheDocument();
    });
  });

  describe('Sizes', () => {
    it('should render with small size', () => {
      const { container } = render(
        <IconButton size="small" aria-label="Small">
          <HouseIcon />
        </IconButton>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should render with medium size', () => {
      const { container } = render(
        <IconButton size="medium" aria-label="Medium">
          <HouseIcon />
        </IconButton>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should render with large size', () => {
      const { container } = render(
        <IconButton size="large" aria-label="Large">
          <HouseIcon />
        </IconButton>,
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('Radius', () => {
    it('should render with full radius', () => {
      const { container } = render(
        <IconButton radius="full" aria-label="Full">
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
