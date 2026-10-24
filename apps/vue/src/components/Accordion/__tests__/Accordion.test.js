import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { h } from 'vue';
import { Accordion } from '../../Accordion';
import { AccordionContent } from '../../AccordionContent';
import { AccordionHeader } from '../../AccordionHeader';
import { AccordionItem } from '../../AccordionItem';
function mountAccordion(props = {}) {
    return mount(Accordion, {
        props: {
            type: 'single',
            'onUpdate:value': vi.fn(),
            ...props,
        },
        slots: {
            default: () => [
                h(AccordionItem, { value: 'item-1' }, () => [
                    h(AccordionHeader, () => 'Header 1'),
                    h(AccordionContent, () => 'Content 1'),
                ]),
                h(AccordionItem, { value: 'item-2' }, () => [
                    h(AccordionHeader, () => 'Header 2'),
                    h(AccordionContent, () => 'Content 2'),
                ]),
            ],
        },
    });
}
describe('Accordion', () => {
    describe('Rendering', () => {
        it('should render accordion correctly', () => {
            const wrapper = mountAccordion();
            expect(wrapper.find('[role="presentation"]').exists()).toBe(true);
            expect(wrapper.findAll('button')).toHaveLength(2);
        });
    });
    describe('Interactions', () => {
        it('should toggle accordion item when clicked', async () => {
            const wrapper = mountAccordion();
            await wrapper.findAll('button')[0].trigger('click');
            expect(wrapper.findAll('[data-state]')[0].attributes('data-state')).toBe('open');
        });
        it('should close previously opened item when opening another', async () => {
            const wrapper = mountAccordion();
            await wrapper.findAll('button')[0].trigger('click');
            expect(wrapper.findAll('[data-state]')[0].attributes('data-state')).toBe('open');
            await wrapper.findAll('button')[1].trigger('click');
            expect(wrapper.findAll('[data-state]')[1].attributes('data-state')).toBe('open');
            expect(wrapper.findAll('[data-state]')[0].attributes('data-state')).toBe('closed');
        });
        it('should keep multiple items open when type is multiple', async () => {
            const wrapper = mountAccordion({ type: 'multiple' });
            await wrapper.findAll('button')[0].trigger('click');
            await wrapper.findAll('button')[1].trigger('click');
            expect(wrapper.findAll('[data-state]')[0].attributes('data-state')).toBe('open');
            expect(wrapper.findAll('[data-state]')[1].attributes('data-state')).toBe('open');
        });
        it('should emit the updated value', async () => {
            const onValueChange = vi.fn();
            const wrapper = mountAccordion({ 'onUpdate:value': onValueChange });
            await wrapper.findAll('button')[0].trigger('click');
            expect(onValueChange).toHaveBeenCalledWith(['item-1']);
        });
    });
    describe('Responsividade', () => {
        it.each([
            ['sm', 'sm:w-48'],
            ['md', 'sm:w-72'],
            ['lg', 'sm:w-96'],
        ])('should be full width on mobile and %s width on sm+', (size, expectedClass) => {
            const wrapper = mountAccordion({ size });
            const item = wrapper.find('[role="presentation"]');
            expect(item.classes()).toContain('w-full');
            expect(item.classes()).toContain(expectedClass);
        });
    });
});
