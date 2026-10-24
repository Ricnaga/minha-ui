import { computed } from 'vue';
import { cardSubtitle } from '@/theme';
export function useCardSubtitle(props) {
    const cardSubtitleProps = computed(() => ({
        class: cardSubtitle({
            size: props.size,
            weight: props.weight,
            color: props.color,
            align: props.align,
            class: props.class,
        }),
    }));
    return { cardSubtitleProps };
}
