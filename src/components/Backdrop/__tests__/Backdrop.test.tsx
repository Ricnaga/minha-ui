import { render, screen } from '@testing-library/react';
import { Backdrop } from '..';

describe('Backdrop', () => {
  describe('Rendering', () => {
    it('should render backdrop correctly when closed', () => {
      const { container } = render(<Backdrop isOpen={false}>Content</Backdrop>);
      expect(container).toMatchSnapshot();
    });

    it('should render backdrop correctly when open', () => {
      const { container } = render(<Backdrop isOpen={true}>Content</Backdrop>);
      expect(container).toMatchSnapshot();
    });
  });

  describe('States', () => {
    it('should render with children when open', () => {
      render(<Backdrop isOpen={true}>Modal Content</Backdrop>);
      expect(screen.getByText('Modal Content')).toBeInTheDocument();
    });
  });

  describe('Loading State', () => {
    it('should render loading state correctly', () => {
      const { container } = render(
        <Backdrop isLoading={true}>Loading</Backdrop>,
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('Blur Effects', () => {
    it('should render with no blur', () => {
      const { container } = render(<Backdrop isOpen={true} blur="none" />);
      expect(container).toMatchSnapshot();
    });

    it('should render with sm blur', () => {
      const { container } = render(<Backdrop isOpen={true} blur="sm" />);
      expect(container).toMatchSnapshot();
    });

    it('should render with md blur', () => {
      const { container } = render(<Backdrop isOpen={true} blur="md" />);
      expect(container).toMatchSnapshot();
    });

    it('should render with lg blur', () => {
      const { container } = render(<Backdrop isOpen={true} blur="lg" />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Z-Index', () => {
    it('should render with custom z-index', () => {
      const { container } = render(
        <Backdrop isOpen={true} zIndex={100}>
          Content
        </Backdrop>,
      );
      expect(container).toMatchSnapshot();
    });
  });
});
