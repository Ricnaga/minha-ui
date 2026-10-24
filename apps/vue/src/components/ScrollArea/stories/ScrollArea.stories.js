import { h } from 'vue';
import { ScrollArea } from '../';
import { testDefaultScrollArea } from './ScrollArea.play';
import ScrollAreaHorizontalStory from './ScrollAreaHorizontalStory.vue';
import ScrollAreaSizesStory from './ScrollAreaSizesStory.vue';
import ScrollAreaStory from './ScrollAreaStory.vue';
const meta = {
    title: 'Components/Estruturas/ScrollArea',
    component: ScrollArea,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        class: 'h-48 w-64',
    },
    argTypes: {
        orientation: {
            control: 'select',
            options: ['vertical', 'horizontal', 'both'],
        },
        size: { control: 'select', options: ['sm', 'md', 'lg'] },
    },
};
export default meta;
export const Default = {
    render: (args) => h(ScrollAreaStory, args),
    play: testDefaultScrollArea,
};
export const Horizontal = {
    args: { orientation: 'horizontal' },
    render: (args) => h(ScrollAreaHorizontalStory, args),
};
export const Both = {
    args: { orientation: 'both' },
    render: (args) => h(ScrollAreaHorizontalStory, {
        ...args,
        label: 'Lista com rolagem vertical e horizontal',
    }),
};
export const Sizes = {
    render: () => h(ScrollAreaSizesStory),
};
export const Rtl = {
    render: (args) => h(ScrollAreaStory, {
        ...args,
        dir: 'rtl',
        label: 'Lista de itens (RTL)',
    }),
};
