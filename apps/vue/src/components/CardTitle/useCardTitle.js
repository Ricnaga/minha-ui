import { computed } from 'vue';
import { cardTitle } from '@/theme';
export function useCardTitle(props) {
    const tag = computed(() => props.as ?? 'h2');
    const cardTitleProps = computed(() => ({
        class: cardTitle({
            size: props.size,
            weight: props.weight,
            color: props.color,
            align: props.align,
            class: props.class,
        }),
    }));
    return { cardTitleProps, tag };
}
