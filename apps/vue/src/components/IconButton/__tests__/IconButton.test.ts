import { PhHouse } from '@phosphor-icons/vue';
import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { h } from 'vue';

import { IconButton } from '../';

describe('IconButton', () => {
  it('should render icon button correctly', () => {
    const wrapper = mount(IconButton, {
      attrs: { 'aria-label': 'Home' },
      slots: { default: () => h(PhHouse) },
    });

    expect(wrapper.element.tagName).toBe('BUTTON');
    expect(wrapper.attributes('aria-label')).toBe('Home');
  });

  it('should call onClick when clicked', async () => {
    const handleClick = vi.fn();
    const wrapper = mount(IconButton, {
      attrs: { 'aria-label': 'Click', onClick: handleClick },
      slots: { default: () => h(PhHouse) },
    });

    await wrapper.get('button').trigger('click');

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
