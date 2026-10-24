import { ErrorState } from '../';
import { testDefaultErrorState } from './ErrorState.play';
const meta = {
    title: 'Components/Feedback/ErrorState',
    component: ErrorState,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    play: testDefaultErrorState,
};
