import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import TransitionContainer from '../TransitionContainer.vue';
const animations = [
    ['fade', 'fade-in', 'fade-out'],
    ['zoom', 'zoom-in-95', 'zoom-out-95'],
    ['slideFromTop', 'slide-in-from-top', 'slide-out-to-top'],
    ['slideFromBottom', 'slide-in-from-bottom', 'slide-out-to-bottom'],
    ['slideFromLeft', 'slide-in-from-left', 'slide-out-to-left'],
    ['slideFromRight', 'slide-in-from-right', 'slide-out-to-right'],
];
describe('TransitionContainer', () => {
    describe('Rendering', () => {
        it('should render the content', () => {
            const wrapper = mount(TransitionContainer, {
                props: { isOpen: true },
                slots: { default: 'Conteúdo animado' },
            });
            expect(wrapper.text()).toBe('Conteúdo animado');
        });
        it('should forward native attributes', () => {
            const wrapper = mount(TransitionContainer, {
                props: { isOpen: true },
                attrs: { 'data-testid': 'transition', id: 'hero' },
            });
            expect(wrapper.attributes('data-testid')).toBe('transition');
            expect(wrapper.attributes('id')).toBe('hero');
        });
        it('should merge the consumer class', () => {
            const wrapper = mount(TransitionContainer, {
                props: { isOpen: true, class: 'mt-4' },
            });
            expect(wrapper.classes()).toContain('mt-4');
            expect(wrapper.classes()).toContain('animate-in');
        });
    });
    describe('Visibility', () => {
        it('should run the enter animation when open', () => {
            const wrapper = mount(TransitionContainer, { props: { isOpen: true } });
            expect(wrapper.classes()).toContain('animate-in');
            expect(wrapper.classes()).toContain('fade-in');
            expect(wrapper.attributes('aria-hidden')).toBeUndefined();
            expect(wrapper.attributes('inert')).toBeUndefined();
        });
        it('should run the exit animation and hide from assistive tech when closed', () => {
            const wrapper = mount(TransitionContainer, { props: { isOpen: false } });
            expect(wrapper.classes()).toContain('animate-out');
            expect(wrapper.classes()).toContain('fade-out');
            expect(wrapper.attributes('aria-hidden')).toBe('true');
            expect(wrapper.attributes('inert')).toBe('true');
        });
        it('should allow overriding aria-hidden and inert', () => {
            const wrapper = mount(TransitionContainer, {
                props: { isOpen: false, ariaHidden: false, inert: false },
            });
            expect(wrapper.attributes('aria-hidden')).toBe('false');
            expect(wrapper.attributes('inert')).toBeUndefined();
        });
    });
    describe('Animations', () => {
        it.each(animations)('should apply the %s animation pair', async (animation, enterClass, exitClass) => {
            const wrapper = mount(TransitionContainer, {
                props: { isOpen: true, animation },
            });
            expect(wrapper.classes()).toContain(enterClass);
            await wrapper.setProps({ isOpen: false });
            expect(wrapper.classes()).toContain(exitClass);
        });
        it('should compose multiple animations', async () => {
            const wrapper = mount(TransitionContainer, {
                props: { isOpen: true, animation: ['fade', 'slideFromBottom'] },
            });
            expect(wrapper.classes()).toContain('animate-in');
            expect(wrapper.classes()).toContain('fade-in');
            expect(wrapper.classes()).toContain('slide-in-from-bottom');
            await wrapper.setProps({ isOpen: false });
            expect(wrapper.classes()).toContain('animate-out');
            expect(wrapper.classes()).toContain('fade-out');
            expect(wrapper.classes()).toContain('slide-out-to-bottom');
        });
    });
});
