import { computed } from 'vue';
import { cardBody } from '@/theme';
export function useCardBody(props) {
    const cardBodyProps = computed(() => ({
        class: cardBody({
            padding: props.padding,
            gap: props.gap,
            background: props.background,
            class: props.class,
        }),
    }));
    return { cardBodyProps };
}
