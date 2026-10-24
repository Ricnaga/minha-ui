import { h } from 'vue';
import { CardBody } from '../';
import { testDefaultCardBody } from './CardBody.play';
import CardBodyStory from './CardBodyStory.vue';
const meta = {
    title: 'Components/Estruturas/Card/CardBody',
    component: CardBody,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
};
export default meta;
export const Default = {
    render: (args) => h(CardBodyStory, args),
    play: testDefaultCardBody,
};
