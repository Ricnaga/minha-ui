import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import ScrollArea from '../ScrollArea.vue';
const orientations = [
    ['vertical', 'overflow-y-auto'],
    ['horizontal', 'overflow-x-auto'],
    ['both', 'overflow-auto'],
];
const sizes = [
    ['sm', 'w-1.5'],
    ['md', 'w-2'],
    ['lg', 'w-3'],
];
describe('ScrollArea', () => {
    describe('Rendering', () => {
        it('should render the content', () => {
            const wrapper = mount(ScrollArea, {
                slots: { default: 'Lista de itens' },
            });
            expect(wrapper.text()).toBe('Lista de itens');
        });
        it('should be a focusable region by default', () => {
            const wrapper = mount(ScrollArea);
            expect(wrapper.attributes('role')).toBe('region');
            expect(wrapper.attributes('tabindex')).toBe('0');
        });
        it('should forward native attributes', () => {
            const wrapper = mount(ScrollArea, {
                attrs: { 'aria-label': 'Lista', 'data-testid': 'scroll' },
            });
            expect(wrapper.attributes('aria-label')).toBe('Lista');
            expect(wrapper.attributes('data-testid')).toBe('scroll');
        });
        it('should allow overriding the default role and tabindex', () => {
            const wrapper = mount(ScrollArea, {
                props: { role: 'group', tabindex: -1 },
            });
            expect(wrapper.attributes('role')).toBe('group');
            expect(wrapper.attributes('tabindex')).toBe('-1');
        });
        it('should merge the consumer class', () => {
            const wrapper = mount(ScrollArea, { props: { class: 'min-h-32' } });
            expect(wrapper.classes()).toContain('min-h-32');
            expect(wrapper.classes()).toContain('overflow-y-auto');
        });
    });
    describe('Variants', () => {
        it.each(orientations)('should apply the %s orientation classes', (orientation, expectedClass) => {
            const wrapper = mount(ScrollArea, { props: { orientation } });
            expect(wrapper.classes()).toContain(expectedClass);
        });
        it.each(sizes)('should apply the %s size classes', (size, expectedClass) => {
            const wrapper = mount(ScrollArea, { props: { size } });
            expect(wrapper.classes()).toContain(`[&::-webkit-scrollbar]:${expectedClass}`);
        });
        it('should reveal the scrollbar thumb on hover', () => {
            const wrapper = mount(ScrollArea);
            expect(wrapper.classes()).toContain('hover:[&::-webkit-scrollbar-thumb]:bg-neutral-600');
        });
    });
});
