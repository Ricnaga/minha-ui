import { h } from 'vue';
import ContextStory from './ContextStory.vue';
import { testDefaultContext } from './useContext.play';
const meta = {
    title: 'Composables/useContext',
    component: ContextStory,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    render: () => h(ContextStory),
    play: testDefaultContext,
};
