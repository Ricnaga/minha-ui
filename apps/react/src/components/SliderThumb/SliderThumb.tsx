import type { SliderThumbProps } from './slider-thumb.types';
import { useSliderThumb } from './useSliderThumb';

export function SliderThumb(props: SliderThumbProps) {
  const { thumbProps, bubbleProps, showValue, valueLabel } =
    useSliderThumb(props);

  return (
    <div {...thumbProps}>
      {showValue && <span {...bubbleProps}>{valueLabel}</span>}
    </div>
  );
}
