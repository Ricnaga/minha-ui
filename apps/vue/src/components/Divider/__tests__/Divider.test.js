import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Divider from '../Divider.vue';
describe('Divider', () => {
    describe('Rendering', () => {
        it('should render a separator with the horizontal orientation', () => {
            const wrapper = mount(Divider);
            expect(wrapper.attributes('role')).toBe('separator');
            expect(wrapper.attributes('aria-orientation')).toBe('horizontal');
        });
        it('should render the vertical orientation', () => {
            const wrapper = mount(Divider, { props: { orientation: 'vertical' } });
            expect(wrapper.attributes('aria-orientation')).toBe('vertical');
        });
    });
    describe('Variants', () => {
        it('should apply the horizontal classes', () => {
            const wrapper = mount(Divider);
            expect(wrapper.classes()).toContain('h-px');
            expect(wrapper.classes()).toContain('w-full');
        });
        it('should apply the vertical classes', () => {
            const wrapper = mount(Divider, { props: { orientation: 'vertical' } });
            expect(wrapper.classes()).toContain('w-px');
            expect(wrapper.classes()).toContain('h-full');
        });
        it('should apply the inset classes', () => {
            const wrapper = mount(Divider, { props: { inset: 'center' } });
            expect(wrapper.classes()).toContain('mx-4');
        });
        it('should merge the class with the variant classes', () => {
            const wrapper = mount(Divider, { props: { class: 'w-1/2' } });
            expect(wrapper.classes()).toContain('w-1/2');
            expect(wrapper.classes()).not.toContain('w-full');
        });
    });
    describe('Native attributes', () => {
        it('should keep the separator semantics over consumer attributes', () => {
            const wrapper = mount(Divider, {
                attrs: { role: 'presentation', 'aria-orientation': 'vertical' },
            });
            expect(wrapper.attributes('role')).toBe('separator');
            expect(wrapper.attributes('aria-orientation')).toBe('horizontal');
        });
        it('should forward native attributes to the separator', () => {
            const wrapper = mount(Divider, {
                attrs: { 'data-testid': 'divider', id: 'section-divider' },
            });
            expect(wrapper.attributes('data-testid')).toBe('divider');
            expect(wrapper.attributes('id')).toBe('section-divider');
        });
    });
});
