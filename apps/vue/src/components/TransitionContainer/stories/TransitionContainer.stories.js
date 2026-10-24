import { h } from 'vue';
import { TransitionContainer } from '../';
import { testDefaultTransitionContainer } from './TransitionContainer.play';
import TransitionContainerStory from './TransitionContainerStory.vue';
const effects = [
    'fade',
    'zoom',
    'slideFromTop',
    'slideFromBottom',
    'slideFromLeft',
    'slideFromRight',
];
const meta = {
    title: 'Components/Estruturas/TransitionContainer',
    component: TransitionContainer,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        isOpen: {
            description: 'Controla a entrada (`true`) e a saída (`false`).',
            control: { type: 'boolean' },
            table: {
                type: { summary: 'boolean' },
                category: 'State',
            },
        },
        animation: {
            description: 'Efeitos de entrada/saída. Aceita um efeito ou um array para combiná-los.',
            control: { type: 'check' },
            options: effects,
            table: {
                type: {
                    summary: `"fade" | "zoom" | "slideFromTop" | "slideFromBottom"
            | "slideFromLeft" | "slideFromRight" | TransitionEffect[]`,
                },
                defaultValue: { summary: "['fade']" },
                category: 'Style',
            },
        },
        children: {
            control: false,
            table: {
                type: { summary: 'slot' },
                category: 'Content',
            },
        },
    },
    args: {
        isOpen: true,
        animation: ['fade'],
        children: 'Conteúdo animado',
    },
};
export default meta;
export const Default = {
    render: (args) => h(TransitionContainerStory, args),
    play: testDefaultTransitionContainer,
};
export const Zoom = {
    args: { animation: ['zoom'] },
    render: (args) => h(TransitionContainerStory, args),
};
export const SlideFromBottom = {
    args: { animation: ['slideFromBottom'] },
    render: (args) => h(TransitionContainerStory, args),
};
export const Composed = {
    args: { animation: ['fade', 'slideFromBottom'] },
    render: (args) => h(TransitionContainerStory, args),
};
