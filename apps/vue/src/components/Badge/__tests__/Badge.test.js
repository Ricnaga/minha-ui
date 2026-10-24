import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Badge from '../Badge.vue';
describe('Badge', () => {
    describe('Rendering', () => {
        it('should render badge with value', () => {
            const wrapper = mount(Badge, { props: { value: 5 } });
            expect(wrapper.text()).toBe('5');
        });
        it('should not render badge when value is undefined', () => {
            const wrapper = mount(Badge);
            expect(wrapper.find('.absolute').exists()).toBe(false);
        });
        it('should not render badge when value is zero', () => {
            const wrapper = mount(Badge, { props: { value: 0 } });
            expect(wrapper.find('.absolute').exists()).toBe(false);
        });
        it('should render the content inside the wrapper', () => {
            const wrapper = mount(Badge, {
                props: { value: 1 },
                slots: { default: '<span>Carrinho</span>' },
            });
            expect(wrapper.get('.relative span').text()).toBe('Carrinho');
        });
    });
    describe('Variants', () => {
        it('should apply the color, size and position classes', () => {
            const wrapper = mount(Badge, {
                props: {
                    value: 1,
                    color: 'error',
                    size: 'large',
                    position: 'bottomLeft',
                },
            });
            const badge = wrapper.get('.absolute');
            expect(badge.classes()).toContain('bg-red-600');
            expect(badge.classes()).toContain('size-6');
            expect(badge.classes()).toContain('bottom-0');
        });
        it('should use the default variants', () => {
            const wrapper = mount(Badge, { props: { value: 1 } });
            const badge = wrapper.get('.absolute');
            expect(badge.classes()).toContain('bg-sky-600');
            expect(badge.classes()).toContain('size-4');
            expect(badge.classes()).toContain('top-0');
        });
        it('should merge the class with the variant classes', () => {
            const wrapper = mount(Badge, {
                props: { value: 1, color: 'primary', class: 'bg-red-600' },
            });
            const badge = wrapper.get('.absolute');
            expect(badge.classes()).toContain('bg-red-600');
            expect(badge.classes()).not.toContain('bg-sky-600');
        });
    });
    describe('Native attributes', () => {
        it('should forward native attributes to the badge element', () => {
            const wrapper = mount(Badge, {
                props: { value: 2 },
                attrs: { 'data-testid': 'badge', 'aria-label': 'Itens no carrinho' },
            });
            const badge = wrapper.get('[data-testid="badge"]');
            expect(badge.attributes('aria-label')).toBe('Itens no carrinho');
        });
    });
});
