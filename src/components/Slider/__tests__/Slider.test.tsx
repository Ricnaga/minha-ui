import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ComponentProps } from 'react';
import { Slider } from '..';
import { SliderMark } from '../../SliderMark/SliderMark';
import { SliderRange } from '../../SliderRange/SliderRange';
import { SliderThumb } from '../../SliderThumb/SliderThumb';
import { SliderTrack } from '../../SliderTrack/SliderTrack';

type SliderTestProps = Omit<ComponentProps<typeof Slider>, 'children'>;

function renderSlider(props: SliderTestProps = {}) {
  return render(
    <Slider {...props}>
      <SliderTrack>
        <SliderRange />
        <SliderThumb aria-label="Valor" />
      </SliderTrack>
    </Slider>,
  );
}

describe('Slider', () => {
  describe('Rendering', () => {
    it('should render correctly', () => {
      const { container } = renderSlider();
      expect(container).toMatchSnapshot();
    });

    it('should render the thumb with slider role and aria attributes', () => {
      renderSlider({ min: 0, max: 100, defaultValue: 30 });

      const thumb = screen.getByRole('slider');
      expect(thumb).toHaveAttribute('aria-valuemin', '0');
      expect(thumb).toHaveAttribute('aria-valuemax', '100');
      expect(thumb).toHaveAttribute('aria-valuenow', '30');
    });

    it('should apply size classes to the track', () => {
      renderSlider({ size: 'sm' });
      expect(screen.getByTestId('slider-track').className).toContain('h-1');
    });

    it('should apply color classes to the range', () => {
      renderSlider({ color: 'error' });
      expect(screen.getByTestId('slider-range').className).toContain(
        'bg-red-500',
      );
    });

    it('should render marks with labels', () => {
      render(
        <Slider defaultValue={50}>
          <SliderTrack>
            <SliderRange />
            <SliderThumb />
            <SliderMark value={0} label="0" />
            <SliderMark value={50} label="50" />
          </SliderTrack>
        </Slider>,
      );

      expect(screen.getByTestId('slider-mark-0')).toBeInTheDocument();
      expect(screen.getByText('50')).toBeInTheDocument();
    });

    it('should render the value bubble when showValue is set', () => {
      renderSlider({ showValue: true, defaultValue: 42 });
      expect(screen.getByTestId('slider-thumb-bubble-0')).toHaveTextContent(
        '42',
      );
    });
  });

  describe('Interactions', () => {
    it('should increase the value with ArrowRight', async () => {
      const user = userEvent.setup();
      renderSlider({ defaultValue: 10, step: 5 });

      const thumb = screen.getByRole('slider');
      thumb.focus();
      await user.keyboard('{ArrowRight}');

      expect(thumb).toHaveAttribute('aria-valuenow', '15');
    });

    it('should decrease the value with ArrowLeft', async () => {
      const user = userEvent.setup();
      renderSlider({ defaultValue: 10, step: 5 });

      const thumb = screen.getByRole('slider');
      thumb.focus();
      await user.keyboard('{ArrowLeft}');

      expect(thumb).toHaveAttribute('aria-valuenow', '5');
    });

    it('should jump to min with Home and to max with End', async () => {
      const user = userEvent.setup();
      renderSlider({ defaultValue: 50 });

      const thumb = screen.getByRole('slider');
      thumb.focus();

      await user.keyboard('{End}');
      expect(thumb).toHaveAttribute('aria-valuenow', '100');

      await user.keyboard('{Home}');
      expect(thumb).toHaveAttribute('aria-valuenow', '0');
    });

    it('should emit the next value through onValueChange', async () => {
      const user = userEvent.setup();
      const handleValueChange = vi.fn();
      renderSlider({ defaultValue: 10, onValueChange: handleValueChange });

      screen.getByRole('slider').focus();
      await user.keyboard('{ArrowRight}');

      expect(handleValueChange).toHaveBeenCalledWith(11);
    });

    it('should not update internally when controlled', async () => {
      const user = userEvent.setup();
      const handleValueChange = vi.fn();
      renderSlider({ value: 40, onValueChange: handleValueChange });

      const thumb = screen.getByRole('slider');
      thumb.focus();
      await user.keyboard('{ArrowRight}');

      expect(handleValueChange).toHaveBeenCalledWith(41);
      expect(thumb).toHaveAttribute('aria-valuenow', '40');
    });

    it('should not respond to keyboard when disabled', async () => {
      const user = userEvent.setup();
      const handleValueChange = vi.fn();
      renderSlider({
        defaultValue: 40,
        disabled: true,
        onValueChange: handleValueChange,
      });

      const thumb = screen.getByRole('slider');
      expect(thumb).toHaveAttribute('aria-disabled', 'true');
      expect(thumb).toHaveAttribute('tabindex', '-1');

      thumb.focus();
      await user.keyboard('{ArrowRight}');

      expect(handleValueChange).not.toHaveBeenCalled();
      expect(thumb).toHaveAttribute('aria-valuenow', '40');
    });
  });

  describe('Range', () => {
    function renderRangeSlider(props: SliderTestProps = {}) {
      return render(
        <Slider {...props} defaultValue={[20, 70]}>
          <SliderTrack>
            <SliderRange />
            <SliderThumb index={0} aria-label="Mínimo" />
            <SliderThumb index={1} aria-label="Máximo" />
          </SliderTrack>
        </Slider>,
      );
    }

    it('should render both thumbs with their values', () => {
      renderRangeSlider();

      const thumbs = screen.getAllByRole('slider');
      expect(thumbs).toHaveLength(2);
      expect(thumbs[0]).toHaveAttribute('aria-valuenow', '20');
      expect(thumbs[1]).toHaveAttribute('aria-valuenow', '70');
    });

    it('should not let the lower thumb cross the upper thumb', async () => {
      const user = userEvent.setup();
      renderRangeSlider();

      const [lowerThumb, upperThumb] = screen.getAllByRole('slider');
      lowerThumb.focus();
      await user.keyboard('{End}');

      expect(lowerThumb).toHaveAttribute('aria-valuenow', '70');
      expect(upperThumb).toHaveAttribute('aria-valuenow', '70');
    });

    it('should not let the upper thumb cross the lower thumb', async () => {
      const user = userEvent.setup();
      renderRangeSlider();

      const [lowerThumb, upperThumb] = screen.getAllByRole('slider');
      upperThumb.focus();
      await user.keyboard('{Home}');

      expect(lowerThumb).toHaveAttribute('aria-valuenow', '20');
      expect(upperThumb).toHaveAttribute('aria-valuenow', '20');
    });

    it('should emit a tuple through onValueChange', async () => {
      const user = userEvent.setup();
      const handleValueChange = vi.fn();
      renderRangeSlider({ onValueChange: handleValueChange });

      const [lowerThumb] = screen.getAllByRole('slider');
      lowerThumb.focus();
      await user.keyboard('{ArrowRight}');

      expect(handleValueChange).toHaveBeenCalledWith([21, 70]);
    });
  });
});
