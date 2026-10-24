import { EmptyState } from '../';
import { testDefaultEmptyState } from './EmptyState.play';
const meta = {
    title: 'Components/Feedback/EmptyState',
    component: EmptyState,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    play: testDefaultEmptyState,
};
