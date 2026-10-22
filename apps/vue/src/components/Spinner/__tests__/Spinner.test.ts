import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Spinner from '../Spinner.vue';

describe('Spinner', () => {
  it('should render with role status and aria-busy', () => {
    const wrapper = mount(Spinner);

    expect(wrapper.get('[role="status"]').attributes('aria-busy')).toBe('true');
  });

  it('should render the svg inside the animated wrapper', () => {
    const wrapper = mount(Spinner);

    const wrapperElement = wrapper.get('[role="status"] > div');

    expect(wrapperElement.classes()).toContain('animate-spin');
    expect(wrapperElement.find('svg').exists()).toBe(true);
  });

  it('should apply the color and thickness to the icon', () => {
    const wrapper = mount(Spinner, {
      props: { color: 'error', thickness: 'lg' },
    });

    const icon = wrapper.get('svg');

    expect(icon.classes()).toContain('stroke-red-400');
    expect(icon.classes()).toContain('stroke-[10px]');
  });
});
