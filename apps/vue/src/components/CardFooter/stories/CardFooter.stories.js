import { h } from 'vue';
import { CardFooter } from '../';
import { testDefaultCardFooter } from './CardFooter.play';
import CardFooterStory from './CardFooterStory.vue';
const meta = {
    title: 'Components/Estruturas/Card/CardFooter',
    component: CardFooter,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
};
export default meta;
export const Default = {
    render: (args) => h(CardFooterStory, args),
    play: testDefaultCardFooter,
};
