import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Chip } from '..';

describe('Chip', () => {
  it('should render chip correctly', () => {
    const { container } = render(<Chip>Tag</Chip>);
    expect(container).toMatchSnapshot();
  });

  it('should render chip with text', () => {
    render(<Chip>React</Chip>);
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('should call onClick when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Chip onClick={handleClick}>Clickable</Chip>);

    await user.click(screen.getByText('Clickable'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  describe('Removable', () => {
    it('should not render a remove button without onRemove', () => {
      render(<Chip>Tag</Chip>);
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    it('should render an accessible remove button with onRemove', () => {
      render(<Chip onRemove={vi.fn()}>Tag</Chip>);
      expect(
        screen.getByRole('button', { name: 'Remover Tag' }),
      ).toBeInTheDocument();
    });

    it('should call onRemove when the button is clicked', async () => {
      const user = userEvent.setup();
      const handleRemove = vi.fn();
      render(<Chip onRemove={handleRemove}>Tag</Chip>);

      await user.click(screen.getByRole('button', { name: 'Remover Tag' }));
      expect(handleRemove).toHaveBeenCalledTimes(1);
    });

    it('should not trigger the chip onClick when removing', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      const handleRemove = vi.fn();
      render(
        <Chip onClick={handleClick} onRemove={handleRemove}>
          Tag
        </Chip>,
      );

      await user.click(screen.getByRole('button', { name: 'Remover Tag' }));

      expect(handleRemove).toHaveBeenCalledTimes(1);
      expect(handleClick).not.toHaveBeenCalled();
    });
  });
});
