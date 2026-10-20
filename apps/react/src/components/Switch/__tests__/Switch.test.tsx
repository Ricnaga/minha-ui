import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Switch } from '..';

describe('Switch', () => {
  describe('Rendering', () => {
    it('should render correctly', () => {
      const { container } = render(<Switch />);
      expect(container).toMatchSnapshot();
    });

    it('should render with an accessible switch role', () => {
      render(<Switch label="Ativo" />);
      expect(screen.getByRole('switch')).toBeInTheDocument();
    });

    it('should associate the label with the switch', () => {
      render(<Switch label="Ativo" />);
      expect(screen.getByLabelText('Ativo')).toBe(screen.getByRole('switch'));
    });

    it('should apply size classes', () => {
      render(<Switch size="small" label="Ativo" />);
      expect(screen.getByRole('switch').className).toContain('w-9');
    });

    it('should apply color classes', () => {
      render(<Switch color="error" label="Ativo" />);
      expect(screen.getByRole('switch').className).toContain(
        'checked:bg-red-500',
      );
    });
  });

  describe('Interactions', () => {
    it('should toggle when clicked', async () => {
      const user = userEvent.setup();
      render(<Switch label="Ativo" />);

      const control = screen.getByRole('switch');
      expect(control).not.toBeChecked();

      await user.click(control);
      expect(control).toBeChecked();

      await user.click(control);
      expect(control).not.toBeChecked();
    });

    it('should emit a boolean through onCheckedChange', async () => {
      const user = userEvent.setup();
      const handleCheckedChange = vi.fn();
      render(<Switch onCheckedChange={handleCheckedChange} />);

      await user.click(screen.getByRole('switch'));

      expect(handleCheckedChange).toHaveBeenCalledWith(true);
    });

    it('should toggle when the label is clicked', async () => {
      const user = userEvent.setup();
      render(<Switch label="Ativo" />);

      await user.click(screen.getByText('Ativo'));

      expect(screen.getByRole('switch')).toBeChecked();
    });

    it('should start checked with defaultChecked', () => {
      render(<Switch defaultChecked label="Ativo" />);
      expect(screen.getByRole('switch')).toBeChecked();
    });

    it('should respect the controlled value', async () => {
      const user = userEvent.setup();
      const handleCheckedChange = vi.fn();
      render(<Switch checked={false} onCheckedChange={handleCheckedChange} />);

      const control = screen.getByRole('switch');
      await user.click(control);

      expect(control).not.toBeChecked();
      expect(handleCheckedChange).toHaveBeenCalledWith(true);
    });

    it('should not toggle when disabled', async () => {
      const user = userEvent.setup();
      const handleCheckedChange = vi.fn();
      render(
        <Switch disabled onCheckedChange={handleCheckedChange} label="Ativo" />,
      );

      const control = screen.getByRole('switch');
      await user.click(control);

      expect(control).not.toBeChecked();
      expect(control).toBeDisabled();
      expect(handleCheckedChange).not.toHaveBeenCalled();
    });
  });
});
