import { computed } from 'vue';
import { cardHeader } from '@/theme';
export function useCardHeader(props) {
    const cardHeaderProps = computed(() => ({
        class: cardHeader({
            align: props.align,
            divider: props.divider,
            background: props.background,
            class: props.class,
        }),
    }));
    return { cardHeaderProps };
}
