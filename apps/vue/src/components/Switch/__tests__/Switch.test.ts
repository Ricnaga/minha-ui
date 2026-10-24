import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';

import Switch from '../Switch.vue';

describe('Switch', () => {
  describe('Rendering', () => {
    it('should render correctly', () => {
      const wrapper = mount(Switch);
      expect(wrapper.html()).toMatchSnapshot();
    });

    it('should render with an accessible switch role', () => {
      const wrapper = mount(Switch, { props: { label: 'Ativo' } });
      expect(wrapper.find('[role="switch"]').exists()).toBe(true);
    });

    it('should associate the label with the switch', () => {
      const wrapper = mount(Switch, { props: { label: 'Ativo' } });
      expect(wrapper.text()).toContain('Ativo');
    });

    it('should apply size classes', () => {
      const wrapper = mount(Switch, { props: { size: 'small', label: 'Ativo' } });
      expect(wrapper.find('input').classes().join(' ')).toContain('w-9');
    });

    it('should apply color classes', () => {
      const wrapper = mount(Switch, { props: { color: 'error', label: 'Ativo' } });
      expect(wrapper.find('input').classes().join(' ')).toContain('checked:bg-red-500');
    });
  });

  describe('Interactions', () => {
    it('should toggle when clicked', async () => {
      const wrapper = mount(Switch, { props: { label: 'Ativo' } });
      const control = wrapper.find('input');
      expect((control.element as HTMLInputElement).checked).toBe(false);
      await control.trigger('click');
      expect((control.element as HTMLInputElement).checked).toBe(true);
    });

    it('should emit a boolean through onCheckedChange', async () => {
      const handleCheckedChange = vi.fn();
      const wrapper = mount(Switch, { props: { onCheckedChange: handleCheckedChange } });
      await wrapper.find('input').trigger('change');
      expect(handleCheckedChange).toHaveBeenCalled();
    });

    it('should toggle when the label is clicked', async () => {
      const wrapper = mount(Switch, { props: { label: 'Ativo' } });
      await wrapper.find('label').trigger('click');
      expect((wrapper.find('input').element as HTMLInputElement).checked).toBe(true);
    });

    it('should start checked with defaultChecked', () => {
      const wrapper = mount(Switch, { props: { defaultChecked: true, label: 'Ativo' } });
      expect((wrapper.find('input').element as HTMLInputElement).defaultChecked).toBe(true);
    });
  });
});
