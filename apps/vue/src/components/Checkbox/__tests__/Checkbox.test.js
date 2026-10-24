import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { Checkbox } from '../';
describe('Checkbox', () => {
    it('should render checkbox correctly', () => {
        const wrapper = mount(Checkbox);
        expect(wrapper.element.tagName).toBe('INPUT');
        expect(wrapper.attributes('type')).toBe('checkbox');
    });
    it('should toggle on click', async () => {
        const wrapper = mount(Checkbox);
        const checkbox = wrapper.get('input');
        expect(checkbox.element.checked).toBe(false);
        await checkbox.trigger('click');
        expect(checkbox.element.checked).toBe(true);
        await checkbox.trigger('click');
        expect(checkbox.element.checked).toBe(false);
    });
});
