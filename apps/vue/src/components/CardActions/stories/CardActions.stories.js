import { h } from 'vue';
import { CardActions } from '../';
import { testDefaultCardActions } from './CardActions.play';
import CardActionsStory from './CardActionsStory.vue';
const meta = {
    title: 'Components/Estruturas/Card/CardActions',
    component: CardActions,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
};
export default meta;
export const Default = {
    render: (args) => h(CardActionsStory, args),
    play: testDefaultCardActions,
};
