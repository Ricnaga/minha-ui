import type { SliderMarkProps } from './slider-mark.types';
import { useSliderMark } from './useSliderMark';

export function SliderMark(props: SliderMarkProps) {
  const { markProps, labelProps, label } = useSliderMark(props);

  return (
    <>
      <span {...markProps} />
      {label !== undefined && <span {...labelProps}>{label}</span>}
    </>
  );
}
