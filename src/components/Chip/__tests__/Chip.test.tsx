import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Chip } from '..';

describe('Chip', () => {
  describe('Rendering', () => {
    it('should render chip correctly', () => {
      const { container } = render(<Chip>Tag</Chip>);
      expect(container).toMatchSnapshot();
    });

    it('should render chip with text', () => {
      render(<Chip>React</Chip>);
      expect(screen.getByText('React')).toBeInTheDocument();
    });
  });

  describe('Colors', () => {
    it('should render with primary color', () => {
      const { container } = render(<Chip color="primary">Primary</Chip>);
      expect(container).toMatchSnapshot();
    });

    it('should render with secondary color', () => {
      const { container } = render(<Chip color="secondary">Secondary</Chip>);
      expect(container).toMatchSnapshot();
    });

    it('should render with success color', () => {
      const { container } = render(<Chip color="success">Success</Chip>);
      expect(container).toMatchSnapshot();
    });

    it('should render with warning color', () => {
      const { container } = render(<Chip color="warning">Warning</Chip>);
      expect(container).toMatchSnapshot();
    });

    it('should render with error color', () => {
      const { container } = render(<Chip color="error">Error</Chip>);
      expect(container).toMatchSnapshot();
    });

    it('should render with info color', () => {
      const { container } = render(<Chip color="info">Info</Chip>);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Sizes', () => {
    it('should render with small size', () => {
      const { container } = render(<Chip size="small">Small</Chip>);
      expect(container).toMatchSnapshot();
    });

    it('should render with medium size', () => {
      const { container } = render(<Chip size="medium">Medium</Chip>);
      expect(container).toMatchSnapshot();
    });

    it('should render with large size', () => {
      const { container } = render(<Chip size="large">Large</Chip>);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Rounded', () => {
    it('should render with full rounded', () => {
      const { container } = render(<Chip rounded="full">Full</Chip>);
      expect(container).toMatchSnapshot();
    });

    it('should render with none rounded', () => {
      const { container } = render(<Chip rounded="none">None</Chip>);
      expect(container).toMatchSnapshot();
    });

    it('should render with sm rounded', () => {
      const { container } = render(<Chip rounded="sm">Sm</Chip>);
      expect(container).toMatchSnapshot();
    });

    it('should render with md rounded', () => {
      const { container } = render(<Chip rounded="md">Md</Chip>);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Interactions', () => {
    it('should call onClick when clicked', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(<Chip onClick={handleClick}>Clickable</Chip>);

      await user.click(screen.getByText('Clickable'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
