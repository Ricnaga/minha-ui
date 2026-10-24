import { h } from 'vue';
import { Badge } from '../';
import { testDefaultBadge } from './Badge.play';
import BadgeStory from './BadgeStory.vue';
const colors = [
    'primary',
    'secondary',
    'success',
    'error',
    'warning',
    'info',
];
const sizes = ['small', 'medium', 'large'];
const positions = [
    'topRight',
    'topLeft',
    'bottomRight',
    'bottomLeft',
];
const meta = {
    title: 'Components/Indicadores/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        color: {
            description: 'Cor do badge, seguindo o design system',
            control: 'select',
            options: colors,
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'primary' },
            },
        },
        size: {
            description: 'Tamanho do badge',
            control: 'select',
            options: sizes,
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'medium' },
            },
        },
        position: {
            description: 'Posição do badge em relação ao elemento pai',
            control: 'select',
            options: positions,
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'topRight' },
            },
        },
        value: {
            description: 'Valor numérico ou texto exibido no badge',
            control: 'text',
            table: {
                type: { summary: 'string | number' },
            },
        },
        children: {
            description: 'Elemento pai ao qual o badge está attached',
            control: false,
            table: {
                type: { summary: 'slot' },
            },
        },
    },
    args: {
        value: 3,
    },
};
export default meta;
export const Default = {
    render: (args) => h(BadgeStory, args),
    play: testDefaultBadge,
};
export const Colors = {
    render: () => h('div', { class: 'flex gap-4' }, colors.map((color) => h(Badge, { key: color, color, value: 5 }, {
        default: () => h('button', { class: 'rounded-full bg-gray-200 p-4' }, color),
    }))),
};
export const Sizes = {
    render: () => h('div', { class: 'flex items-center gap-4' }, sizes.map((size) => h(Badge, { key: size, size, value: 3 }, {
        default: () => h('button', { class: 'rounded-full bg-gray-200 p-4' }, size),
    }))),
};
export const Positions = {
    render: () => h('div', { class: 'relative h-32 w-32 rounded-lg bg-gray-100' }, positions.map((position, index) => h(Badge, { key: position, position, value: index + 1 }, {
        default: () => h('div', { class: 'h-full w-full' }),
    }))),
};
