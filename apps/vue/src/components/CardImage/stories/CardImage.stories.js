import { h } from 'vue';
import { testDefaultCardImage } from './CardImage.play';
import CardImageStory from './CardImageStory.vue';
const meta = {
    title: 'Components/Estruturas/Card/CardImage',
    component: CardImageStory,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        rounded: {
            control: { type: 'select' },
            options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
        },
        aspect: {
            control: { type: 'select' },
            options: ['auto', 'square', 'video', 'portrait'],
        },
    },
    args: {
        class: 'w-64',
        src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
        alt: 'Imagem ilustrativa do card',
    },
};
export default meta;
export const Default = {
    render: (args) => h(CardImageStory, args),
    play: testDefaultCardImage,
};
