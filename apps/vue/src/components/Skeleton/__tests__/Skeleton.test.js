import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Skeleton from '../Skeleton.vue';
describe('Skeleton', () => {
    describe('Rendering', () => {
        it('should render a status region indicating loading', () => {
            const wrapper = mount(Skeleton);
            expect(wrapper.attributes('role')).toBe('status');
            expect(wrapper.attributes('aria-busy')).toBe('true');
            expect(wrapper.classes()).toContain('animate-pulse');
        });
    });
    describe('Variants', () => {
        it('should apply the rounded shape by default', () => {
            const wrapper = mount(Skeleton);
            expect(wrapper.classes()).toContain('rounded-md');
            expect(wrapper.classes()).not.toContain('rounded-none');
        });
        it('should apply the square shape', () => {
            const wrapper = mount(Skeleton, { props: { shape: 'square' } });
            expect(wrapper.classes()).toContain('rounded-none');
        });
        it('should apply the circle shape', () => {
            const wrapper = mount(Skeleton, { props: { shape: 'circle' } });
            expect(wrapper.classes()).toContain('rounded-full');
        });
        it('should merge the class with the variant classes', () => {
            const wrapper = mount(Skeleton, { props: { class: 'h-14 w-32' } });
            expect(wrapper.classes()).toContain('h-14');
            expect(wrapper.classes()).toContain('w-32');
            expect(wrapper.classes()).toContain('animate-pulse');
        });
    });
    describe('Native attributes', () => {
        it('should forward native attributes to the skeleton', () => {
            const wrapper = mount(Skeleton, {
                attrs: { 'data-testid': 'skeleton', id: 'card-skeleton' },
            });
            expect(wrapper.attributes('data-testid')).toBe('skeleton');
            expect(wrapper.attributes('id')).toBe('card-skeleton');
        });
    });
});
