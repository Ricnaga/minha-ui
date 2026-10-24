import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Card from '../Card.vue';
describe('Card', () => {
    it('should render card with children', () => {
        const wrapper = mount(Card, { slots: { default: 'Card Content' } });
        expect(wrapper.text()).toContain('Card Content');
    });
    it('should apply default radius and shadow classes', () => {
        const wrapper = mount(Card, { slots: { default: 'Card Content' } });
        expect(wrapper.classes()).toContain('rounded-md');
        expect(wrapper.classes()).toContain('shadow-md');
    });
    it('should apply custom radius classes', () => {
        const wrapper = mount(Card, {
            props: { radius: 'lg' },
            slots: { default: 'Card Content' },
        });
        expect(wrapper.classes()).toContain('rounded-lg');
    });
    it('should merge the class with the variant classes', () => {
        const wrapper = mount(Card, {
            props: { class: 'w-full' },
            slots: { default: 'Card Content' },
        });
        expect(wrapper.classes()).toContain('w-full');
    });
});
