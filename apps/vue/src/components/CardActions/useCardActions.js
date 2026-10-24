import { computed } from 'vue';
import { cardActions } from '@/theme';
export function useCardActions(props) {
    const cardActionsProps = computed(() => ({
        class: cardActions({
            align: props.align,
            direction: props.direction,
            wrap: props.wrap,
            divider: props.divider,
            class: props.class,
        }),
    }));
    return { cardActionsProps };
}
