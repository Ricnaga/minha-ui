import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';

import { Chip } from '../';

describe('Chip', () => {
  it('should render chip with text', () => {
    const wrapper = mount(Chip, { slots: { default: 'Vue' } });

    expect(wrapper.text()).toContain('Vue');
  });

  it('should call onClick when clicked', async () => {
    const handleClick = vi.fn();
    const wrapper = mount(Chip, {
      attrs: { onClick: handleClick },
      slots: { default: 'Clickable' },
    });

    await wrapper.get('span').trigger('click');

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  describe('Removable', () => {
    it('should not render a remove button without onRemove', () => {
      const wrapper = mount(Chip, { slots: { default: 'Tag' } });

      expect(wrapper.find('button').exists()).toBe(false);
    });

    it('should render an accessible remove button with onRemove', () => {
      const wrapper = mount(Chip, {
        props: { onRemove: vi.fn() },
        slots: { default: 'Tag' },
      });

      expect(wrapper.find('button[aria-label="Remover Tag"]').exists()).toBe(
        true,
      );
    });

    it('should call onRemove when the button is clicked', async () => {
      const handleRemove = vi.fn();
      const wrapper = mount(Chip, {
        props: { onRemove: handleRemove },
        slots: { default: 'Tag' },
      });

      await wrapper.get('button').trigger('click');

      expect(handleRemove).toHaveBeenCalledTimes(1);
    });

    it('should not trigger the chip onClick when removing', async () => {
      const handleClick = vi.fn();
      const handleRemove = vi.fn();
      const wrapper = mount(Chip, {
        attrs: { onClick: handleClick },
        props: { onRemove: handleRemove },
        slots: { default: 'Tag' },
      });

      await wrapper.get('button').trigger('click');

      expect(handleRemove).toHaveBeenCalledTimes(1);
      expect(handleClick).not.toHaveBeenCalled();
    });
  });
});
