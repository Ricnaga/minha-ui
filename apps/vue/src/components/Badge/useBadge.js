import { computed } from 'vue';
import { badge, badgeWrapper } from '@/theme';
export function useBadge(props) {
    const wrapperProps = {
        class: badgeWrapper(),
    };
    const badgeProps = computed(() => ({
        class: badge({
            color: props.color,
            size: props.size,
            position: props.position,
            class: props.class,
        }),
    }));
    const value = computed(() => props.value ?? 0);
    return { badgeProps, value, wrapperProps };
}
