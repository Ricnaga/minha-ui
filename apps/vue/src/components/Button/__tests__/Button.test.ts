import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';

import Button from '../Button.vue';
import ButtonStory from '../stories/ButtonStory.vue';

describe('Button', () => {
  describe('Rendering', () => {
    it('should render a native button element', () => {
      const wrapper = mount(Button, { slots: { default: 'Click me' } });

      expect(wrapper.element.tagName).toBe('BUTTON');
      expect(wrapper.text()).toBe('Click me');
      expect(wrapper.attributes('type')).toBe('button');
    });

    it('should apply the default variants', () => {
      const wrapper = mount(Button);

      expect(wrapper.classes()).toEqual(
        expect.arrayContaining(['text-white', 'h-10', 'rounded-lg']),
      );
      expect(wrapper.classes()).toContain('bg-sky-700');
    });

    it('should apply the variant and color classes', () => {
      const wrapper = mount(Button, {
        props: { variant: 'outline', color: 'error' },
      });

      expect(wrapper.classes()).toContain('border-red-600');
      expect(wrapper.classes()).toContain('text-red-600');
    });
  });

  describe('Interactions', () => {
    it('should emit a click event', async () => {
      const onClick = vi.fn();
      const wrapper = mount(ButtonStory, { props: { onClick } });

      await wrapper.get('button').trigger('click');

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should not emit a click event when disabled', async () => {
      const onClick = vi.fn();
      const wrapper = mount(ButtonStory, {
        props: { onClick, disabled: true },
      });

      await wrapper.get('button').trigger('click');

      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe('Loading', () => {
    it('should render the spinner instead of the content', () => {
      const wrapper = mount(Button, {
        props: { isLoading: true },
        slots: { default: 'Click me' },
      });

      expect(wrapper.find('[role="status"]').exists()).toBe(true);
      expect(wrapper.text()).not.toContain('Click me');
    });

    it('should be disabled while loading', async () => {
      const onClick = vi.fn();
      const wrapper = mount(ButtonStory, {
        props: { onClick, isLoading: true },
      });

      const button = wrapper.get('button');

      expect(button.attributes('disabled')).toBeDefined();

      await button.trigger('click');

      expect(onClick).not.toHaveBeenCalled();
    });
  });
});
