import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { h } from 'vue';
import { Breadcrumb } from '..';
import { BreadcrumbItem } from '../../BreadcrumbItem';
import { BreadcrumbLink } from '../../BreadcrumbLink';
import { BreadcrumbList } from '../../BreadcrumbList';
import { BreadcrumbPage } from '../../BreadcrumbPage';
import { BreadcrumbSeparator } from '../../BreadcrumbSeparator';
function renderBreadcrumb(props = {}) {
    return mount(Breadcrumb, {
        props,
        slots: {
            default: () => h(BreadcrumbList, {}, {
                default: () => [
                    h(BreadcrumbItem, {}, {
                        default: () => h(BreadcrumbLink, { href: '/' }, { default: () => 'Home' }),
                    }),
                    h(BreadcrumbSeparator),
                    h(BreadcrumbItem, {}, {
                        default: () => h(BreadcrumbLink, { href: '/produtos' }, { default: () => 'Produtos' }),
                    }),
                    h(BreadcrumbSeparator),
                    h(BreadcrumbItem, {}, {
                        default: () => h(BreadcrumbPage, {}, { default: () => 'Detalhes' }),
                    }),
                ],
            }),
        },
    });
}
describe('Breadcrumb', () => {
    describe('Rendering', () => {
        it('should render correctly', () => {
            const wrapper = renderBreadcrumb();
            expect(wrapper.html()).toMatchSnapshot();
        });
        it('should render a navigation landmark with an accessible name', () => {
            const wrapper = renderBreadcrumb();
            expect(wrapper.find('nav').exists()).toBe(true);
            expect(wrapper.find('nav').attributes('aria-label')).toBe('Breadcrumb');
        });
        it('should allow overriding the navigation label', () => {
            const wrapper = renderBreadcrumb({ 'aria-label': 'Trilha de navegação' });
            expect(wrapper.find('nav').attributes('aria-label')).toBe('Trilha de navegação');
        });
        it('should render links with their href', () => {
            const wrapper = renderBreadcrumb();
            expect(wrapper.findAll('a')[0].attributes('href')).toBe('/');
            expect(wrapper.findAll('a')[1].attributes('href')).toBe('/produtos');
        });
        it('should mark the current page with aria-current', () => {
            const wrapper = renderBreadcrumb();
            expect(wrapper.find('[aria-current="page"]').text()).toBe('Detalhes');
        });
        it('should hide separators from assistive technology', () => {
            const wrapper = renderBreadcrumb();
            expect(wrapper.findAll('li[aria-hidden="true"]')).toHaveLength(2);
        });
        it('should apply size classes to the list', () => {
            const wrapper = renderBreadcrumb({ size: 'sm' });
            expect(wrapper.find('ol').classes().join(' ')).toContain('text-xs');
        });
        it('should apply responsive gap classes to the list', () => {
            const wrapper = renderBreadcrumb({ size: 'md' });
            const classes = wrapper.find('ol').classes().join(' ');
            expect(classes).toContain('gap-1');
            expect(classes).toContain('sm:gap-1.5');
        });
        it('should render a custom separator', () => {
            const wrapper = renderBreadcrumb({ separator: '/' });
            expect(wrapper.html()).toContain('/');
        });
    });
});
