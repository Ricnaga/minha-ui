import type { SliderProps } from './slider.types';
import { SliderContext, useSliderProvider } from './useSlider';

export function Slider(props: SliderProps) {
  const { children, rootProps, ...context } = useSliderProvider(props);

  return (
    <SliderContext.Provider value={context}>
      <div {...rootProps}>{children}</div>
    </SliderContext.Provider>
  );
}
