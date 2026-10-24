import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import CardTitle from '../CardTitle.vue';
describe('CardTitle', () => {
    it('should render as h2 by default', () => {
        const wrapper = mount(CardTitle, { slots: { default: 'Title' } });
        expect(wrapper.find('h2').exists()).toBe(true);
    });
    it('should render as custom element', () => {
        const wrapper = mount(CardTitle, {
            props: { as: 'h3' },
            slots: { default: 'Title' },
        });
        expect(wrapper.find('h3').exists()).toBe(true);
    });
    it('should apply size classes', () => {
        const wrapper = mount(CardTitle, {
            props: { size: 'lg' },
            slots: { default: 'Title' },
        });
        expect(wrapper.classes()).toContain('text-2xl');
    });
    it('should merge the class with the variant classes', () => {
        const wrapper = mount(CardTitle, {
            props: { class: 'text-red-500' },
            slots: { default: 'Title' },
        });
        expect(wrapper.classes()).toContain('text-red-500');
    });
});
