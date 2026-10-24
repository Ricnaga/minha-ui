import { h } from 'vue';
import { CardDescription } from '../';
import { testDefaultCardDescription } from './CardDescription.play';
import CardDescriptionStory from './CardDescriptionStory.vue';
const meta = {
    title: 'Components/Estruturas/Card/CardDescription',
    component: CardDescription,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
};
export default meta;
export const Default = {
    render: (args) => h(CardDescriptionStory, args),
    play: testDefaultCardDescription,
};
