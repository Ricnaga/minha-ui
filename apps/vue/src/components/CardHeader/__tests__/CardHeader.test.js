import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import CardHeader from '../CardHeader.vue';
describe('CardHeader', () => {
    it('should render card header with children', () => {
        const wrapper = mount(CardHeader, { slots: { default: 'Header' } });
        expect(wrapper.text()).toContain('Header');
    });
    it('should apply divider classes', () => {
        const wrapper = mount(CardHeader, {
            props: { divider: true },
            slots: { default: 'Header' },
        });
        expect(wrapper.classes()).toContain('border-b');
    });
    it('should merge the class with the variant classes', () => {
        const wrapper = mount(CardHeader, {
            props: { class: 'bg-gray-50' },
            slots: { default: 'Header' },
        });
        expect(wrapper.classes()).toContain('bg-gray-50');
    });
});
