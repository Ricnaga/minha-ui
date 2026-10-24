import { PhInfo } from '@phosphor-icons/vue';
import { h } from 'vue';
import Input from '../Input.vue';
import { testDefaultInput, testWithIconsInput } from './Input.play';
const meta = {
    title: 'Components/Formularios/Input',
    component: Input,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        variant: { control: { type: 'radio' }, options: ['underline', 'outline'] },
        startIcon: { control: false },
        endIcon: { control: false },
        type: {
            control: { type: 'select' },
            options: ['text', 'password', 'email', 'number', 'tel', 'url'],
        },
        disabled: { control: 'boolean' },
        required: { control: 'boolean' },
    },
    args: {
        label: 'Nome',
        variant: 'outline',
        type: 'text',
    },
};
export default meta;
export const Default = {
    play: testDefaultInput,
};
export const WithIcons = {
    args: {},
    render: (args) => h(Input, args, {
        startIcon: () => h(PhInfo),
        endIcon: () => h(PhInfo),
    }),
    play: testWithIconsInput,
};
export const Responsive = {
    globals: { viewport: { value: 'mobile', isRotated: false } },
    parameters: { layout: 'padded' },
    args: { label: 'Nome', variant: 'outline' },
};
