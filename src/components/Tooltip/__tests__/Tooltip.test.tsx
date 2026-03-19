import { render } from '@testing-library/react';
import { Tooltip } from '..';

describe('Tooltip', () => {
  describe('Rendering', () => {
    it('should render tooltip correctly', () => {
      const { container } = render(
        <Tooltip content="Tooltip content">
          <button>Hover me</button>
        </Tooltip>,
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('Colors', () => {
    it('should render with primary color', () => {
      const { container } = render(
        <Tooltip content="Primary" color="primary">
          <button>Hover me</button>
        </Tooltip>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should render with secondary color', () => {
      const { container } = render(
        <Tooltip content="Secondary" color="secondary">
          <button>Hover me</button>
        </Tooltip>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should render with success color', () => {
      const { container } = render(
        <Tooltip content="Success" color="success">
          <button>Hover me</button>
        </Tooltip>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should render with error color', () => {
      const { container } = render(
        <Tooltip content="Error" color="error">
          <button>Hover me</button>
        </Tooltip>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should render with warning color', () => {
      const { container } = render(
        <Tooltip content="Warning" color="warning">
          <button>Hover me</button>
        </Tooltip>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should render with info color', () => {
      const { container } = render(
        <Tooltip content="Info" color="info">
          <button>Hover me</button>
        </Tooltip>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should render with black color', () => {
      const { container } = render(
        <Tooltip content="Black" color="black">
          <button>Hover me</button>
        </Tooltip>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should render with white color', () => {
      const { container } = render(
        <Tooltip content="White" color="white">
          <button>Hover me</button>
        </Tooltip>,
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('Positions', () => {
    it('should render with top position', () => {
      const { container } = render(
        <Tooltip content="Top" position="top">
          <button>Hover me</button>
        </Tooltip>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should render with bottom position', () => {
      const { container } = render(
        <Tooltip content="Bottom" position="bottom">
          <button>Hover me</button>
        </Tooltip>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should render with left position', () => {
      const { container } = render(
        <Tooltip content="Left" position="left">
          <button>Hover me</button>
        </Tooltip>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should render with right position', () => {
      const { container } = render(
        <Tooltip content="Right" position="right">
          <button>Hover me</button>
        </Tooltip>,
      );
      expect(container).toMatchSnapshot();
    });
  });
});
