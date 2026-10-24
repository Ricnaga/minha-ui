import { h } from 'vue';
import { Skeleton } from '../';
import { testDefaultSkeleton } from './Skeleton.play';
import SkeletonStory from './SkeletonStory.vue';
const meta = {
    title: 'Components/Feedback/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        shape: {
            control: { type: 'select' },
            options: ['rounded', 'square', 'circle'],
            description: 'Formato do Skeleton',
            table: {
                type: { summary: '"rounded" | "square" | "circle"' },
                defaultValue: { summary: 'rounded' },
            },
        },
        class: {
            control: 'text',
            description: 'Classe Tailwind opcional para layout/customização',
            table: {
                type: { summary: 'string' },
            },
        },
    },
    args: {
        shape: 'rounded',
        class: 'h-14 w-32',
    },
};
export default meta;
export const Default = {
    render: (args) => h(SkeletonStory, args),
    play: testDefaultSkeleton,
};
