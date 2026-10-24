import { h } from 'vue';
import { Card } from '../';
import { testDefaultCard } from './Card.play';
import { testCompositionCard } from './CardComposition.play';
import CardCompositionStory from './CardCompositionStory.vue';
import CardStory from './CardStory.vue';
const meta = {
    title: 'Components/Estruturas/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
};
export default meta;
export const Default = {
    render: (args) => h(CardStory, args),
    play: testDefaultCard,
};
export const Composition = {
    render: (args) => h(CardCompositionStory, args),
    play: testCompositionCard,
};
