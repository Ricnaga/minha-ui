import { h } from 'vue';
import { CardHeader } from '../';
import { testDefaultCardHeader } from './CardHeader.play';
import CardHeaderStory from './CardHeaderStory.vue';
const meta = {
    title: 'Components/Estruturas/Card/CardHeader',
    component: CardHeader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
};
export default meta;
export const Default = {
    render: (args) => h(CardHeaderStory, args),
    play: testDefaultCardHeader,
};
