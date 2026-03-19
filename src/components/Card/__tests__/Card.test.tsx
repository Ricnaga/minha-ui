import { render } from '@testing-library/react';
import { Card } from '..';

describe('Card', () => {
  describe('Rendering', () => {
    it('should render card correctly', () => {
      const { container } = render(<Card>Card Content</Card>);
      expect(container).toMatchSnapshot();
    });

    it('should render card with children', () => {
      render(<Card>Test Content</Card>);
      expect(document.body.textContent).toContain('Test Content');
    });
  });

  describe('Radius Variants', () => {
    it('should render with small radius', () => {
      const { container } = render(<Card radius="sm">Small Radius</Card>);
      expect(container).toMatchSnapshot();
    });

    it('should render with medium radius', () => {
      const { container } = render(<Card radius="md">Medium Radius</Card>);
      expect(container).toMatchSnapshot();
    });

    it('should render with large radius', () => {
      const { container } = render(<Card radius="lg">Large Radius</Card>);
      expect(container).toMatchSnapshot();
    });

    it('should render with full radius', () => {
      const { container } = render(<Card radius="full">Full Radius</Card>);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Shadow Variants', () => {
    it('should render with no shadow', () => {
      const { container } = render(<Card shadow="none">No Shadow</Card>);
      expect(container).toMatchSnapshot();
    });

    it('should render with small shadow', () => {
      const { container } = render(<Card shadow="sm">Small Shadow</Card>);
      expect(container).toMatchSnapshot();
    });

    it('should render with medium shadow', () => {
      const { container } = render(<Card shadow="md">Medium Shadow</Card>);
      expect(container).toMatchSnapshot();
    });

    it('should render with large shadow', () => {
      const { container } = render(<Card shadow="lg">Large Shadow</Card>);
      expect(container).toMatchSnapshot();
    });

    it('should render with extra large shadow', () => {
      const { container } = render(<Card shadow="xl">Extra Large Shadow</Card>);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Custom Class', () => {
    it('should render with custom class', () => {
      const { container } = render(
        <Card className="custom-class">Custom Class</Card>,
      );
      expect(container).toMatchSnapshot();
    });
  });
});
