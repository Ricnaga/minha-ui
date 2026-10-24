import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import Input from '../Input.vue';
describe('Input', () => {
    describe('Rendering', () => {
        it('should render input correctly', () => {
            const wrapper = mount(Input, { attrs: { placeholder: 'Enter text' } });
            expect(wrapper.html()).toMatchSnapshot();
        });
    });
    describe('Interactions', () => {
        it('should call onChange when typing', async () => {
            const handleChange = vi.fn();
            const wrapper = mount(Input, {
                attrs: { placeholder: 'Type here', onInput: handleChange },
            });
            const input = wrapper.find('input');
            await input.setValue('hello');
            expect(handleChange).toHaveBeenCalled();
        });
    });
    describe('Responsividade', () => {
        it('should apply responsive min-width classes on the container', () => {
            const wrapper = mount(Input, { attrs: { placeholder: 'Enter text' } });
            const container = wrapper.element;
            expect(container.className).toContain('min-w-0');
            expect(container.className).toContain('sm:min-w-50');
        });
    });
});
