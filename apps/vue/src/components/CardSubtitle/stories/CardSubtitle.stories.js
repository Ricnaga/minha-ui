import { h } from 'vue';
import { CardSubtitle } from '../';
import { testDefaultCardSubtitle } from './CardSubtitle.play';
import CardSubtitleStory from './CardSubtitleStory.vue';
const meta = {
    title: 'Components/Estruturas/Card/CardSubtitle',
    component: CardSubtitle,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
};
export default meta;
export const Default = {
    render: (args) => h(CardSubtitleStory, args),
    play: testDefaultCardSubtitle,
};
