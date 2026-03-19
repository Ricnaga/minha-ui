import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import { Input } from '..';

describe('Input', () => {
  describe('Rendering', () => {
    it('should render input correctly', () => {
      const { container } = render(<Input placeholder="Enter text" />);
      expect(container).toMatchSnapshot();
    });

    it('should render input with placeholder', () => {
      render(<Input placeholder="Enter email" />);
      expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument();
    });

    it('should render input with label', () => {
      render(<Input label="Email" placeholder="Enter email" />);
      expect(screen.getByText('Email')).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('should render with outline variant', () => {
      const { container } = render(
        <Input variant="outline" placeholder="Outline" />,
      );
      expect(container).toMatchSnapshot();
    });

    it('should render with underline variant', () => {
      const { container } = render(
        <Input variant="underline" placeholder="Underline" />,
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('Icons', () => {
    it('should render with start icon', () => {
      const { container } = render(
        <Input startIcon={<MagnifyingGlassIcon />} placeholder="Search" />,
      );
      expect(container).toMatchSnapshot();
    });

    it('should render with end icon', () => {
      const { container } = render(
        <Input endIcon={<MagnifyingGlassIcon />} placeholder="Search" />,
      );
      expect(container).toMatchSnapshot();
    });

    it('should render with both icons', () => {
      const { container } = render(
        <Input
          startIcon={<MagnifyingGlassIcon />}
          endIcon={<MagnifyingGlassIcon />}
          placeholder="Search"
        />,
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('Disabled State', () => {
    it('should render disabled state correctly', () => {
      const { container } = render(<Input disabled placeholder="Disabled" />);
      expect(container).toMatchSnapshot();
    });

    it('should disable input', () => {
      render(<Input disabled placeholder="Disabled" />);
      expect(screen.getByRole('textbox')).toBeDisabled();
    });
  });

  describe('Interactions', () => {
    it('should call onChange when typing', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<Input onChange={handleChange} placeholder="Type here" />);

      await user.type(screen.getByRole('textbox'), 'hello');
      expect(handleChange).toHaveBeenCalled();
    });

    it('should focus input on click', async () => {
      const user = userEvent.setup();
      render(<Input placeholder="Click me" />);

      await user.click(screen.getByRole('textbox'));
      expect(screen.getByRole('textbox')).toHaveFocus();
    });
  });

  describe('Types', () => {
    it('should render as text type by default', () => {
      render(<Input />);
      expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text');
    });

    it('should render with email type', () => {
      render(<Input type="email" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
    });
  });
});
