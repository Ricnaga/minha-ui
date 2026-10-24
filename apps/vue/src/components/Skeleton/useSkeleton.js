import { computed } from 'vue';
import { skeleton } from '@/theme';
export function useSkeleton(props) {
    const skeletonProps = computed(() => ({
        role: 'status',
        'aria-busy': 'true',
        class: skeleton({ shape: props.shape, class: props.class }),
    }));
    return { skeletonProps };
}
