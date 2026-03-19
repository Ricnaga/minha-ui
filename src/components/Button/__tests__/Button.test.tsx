import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '..';

describe('Button', () => {
  describe('Rendering', () => {
    it('should render button correctly', () => {
      const { container } = render(<Button>Click me</Button>);
      expect(container).toMatchSnapshot();
    });

    it('should render button with text', () => {
      render(<Button>Submit</Button>);
      expect(
        screen.getByRole('button', { name: /submit/i }),
      ).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('should render with contained variant', () => {
      const { container } = render(
        <Button variant="contained">Contained</Button>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should render with outline variant', () => {
      const { container } = render(<Button variant="outline">Outline</Button>);
      expect(container).toMatchSnapshot();
    });

    it('should render with ghost variant', () => {
      const { container } = render(<Button variant="ghost">Ghost</Button>);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Colors', () => {
    it('should render with primary color', () => {
      const { container } = render(<Button color="primary">Primary</Button>);
      expect(container).toMatchSnapshot();
    });

    it('should render with secondary color', () => {
      const { container } = render(
        <Button color="secondary">Secondary</Button>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should render with error color', () => {
      const { container } = render(<Button color="error">Error</Button>);
      expect(container).toMatchSnapshot();
    });

    it('should render with success color', () => {
      const { container } = render(<Button color="success">Success</Button>);
      expect(container).toMatchSnapshot();
    });

    it('should render with info color', () => {
      const { container } = render(<Button color="info">Info</Button>);
      expect(container).toMatchSnapshot();
    });

    it('should render with warning color', () => {
      const { container } = render(<Button color="warning">Warning</Button>);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Sizes', () => {
    it('should render with small size', () => {
      const { container } = render(<Button size="small">Small</Button>);
      expect(container).toMatchSnapshot();
    });

    it('should render with medium size', () => {
      const { container } = render(<Button size="medium">Medium</Button>);
      expect(container).toMatchSnapshot();
    });

    it('should render with large size', () => {
      const { container } = render(<Button size="large">Large</Button>);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Radius', () => {
    it('should render with none radius', () => {
      const { container } = render(<Button radius="none">None</Button>);
      expect(container).toMatchSnapshot();
    });

    it('should render with small radius', () => {
      const { container } = render(<Button radius="small">Small</Button>);
      expect(container).toMatchSnapshot();
    });

    it('should render with medium radius', () => {
      const { container } = render(<Button radius="medium">Medium</Button>);
      expect(container).toMatchSnapshot();
    });

    it('should render with large radius', () => {
      const { container } = render(<Button radius="large">Large</Button>);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Disabled State', () => {
    it('should render disabled state correctly', () => {
      const { container } = render(<Button disabled>Disabled</Button>);
      expect(container).toMatchSnapshot();
    });

    it('should disable button', () => {
      render(<Button disabled>Disabled</Button>);
      expect(screen.getByRole('button')).toBeDisabled();
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

  describe('Types', () => {
    it('should render with submit type', () => {
      render(<Button type="submit">Submit</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });
  });
});
