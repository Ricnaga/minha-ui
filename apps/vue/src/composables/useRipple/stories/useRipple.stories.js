import { h } from 'vue';
import RippleDemo from './RippleDemo.vue';
import { testDefaultRipple } from './useRipple.play';
const meta = {
    title: 'Composables/useRipple',
    component: RippleDemo,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    render: () => h(RippleDemo),
    play: testDefaultRipple,
};
