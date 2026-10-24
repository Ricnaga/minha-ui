import { Spinner } from '../';
import { testDefaultSpinner } from './Spinner.play';
const meta = {
    title: 'Components/Feedback/Spinner',
    component: Spinner,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'success', 'info', 'warning', 'error'],
            description: 'Cor do spinner (semântico)',
            table: {
                type: {
                    summary: '"primary" | "secondary" | "success" | "info" | "warning" | "error"',
                },
                defaultValue: { summary: 'primary' },
            },
        },
        thickness: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
            description: 'Espessura do traço do spinner',
            table: {
                type: { summary: '"sm" | "md" | "lg"' },
                defaultValue: { summary: 'md' },
            },
        },
        class: {
            control: 'text',
            description: 'Classe Tailwind para controlar layout (w/h) do spinner',
            table: {
                type: { summary: 'string' },
            },
        },
    },
    args: {
        class: 'size-24',
        color: 'primary',
        thickness: 'md',
    },
};
export default meta;
export const Default = {
    play: testDefaultSpinner,
};
