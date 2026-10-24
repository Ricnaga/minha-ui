import { testDefaultCheckbox } from './Checkbox.play';
import CheckboxStory from './CheckboxStory.vue';
const meta = {
    title: 'Components/Formularios/Checkbox',
    component: CheckboxStory,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        disabled: {
            control: { type: 'boolean' },
        },
        indeterminate: {
            control: { type: 'boolean' },
        },
    },
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    play: testDefaultCheckbox,
};
