import { computed } from 'vue';
import { cardDescription } from '@/theme';
export function useCardDescription(props) {
    const cardDescriptionProps = computed(() => ({
        class: cardDescription({
            size: props.size,
            weight: props.weight,
            color: props.color,
            align: props.align,
            class: props.class,
        }),
    }));
    return { cardDescriptionProps };
}
