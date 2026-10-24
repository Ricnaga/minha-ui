import { h } from 'vue';
import { CardTitle } from '../';
import { testDefaultCardTitle } from './CardTitle.play';
import CardTitleStory from './CardTitleStory.vue';
const meta = {
    title: 'Components/Estruturas/Card/CardTitle',
    component: CardTitle,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
};
export default meta;
export const Default = {
    render: (args) => h(CardTitleStory, args),
    play: testDefaultCardTitle,
};
