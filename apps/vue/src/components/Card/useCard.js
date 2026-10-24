import { computed } from 'vue';
import { card } from '@/theme';
export function useCard(props) {
    const cardProps = computed(() => ({
        class: card({
            radius: props.radius,
            shadow: props.shadow,
            class: props.class,
        }),
    }));
    return { cardProps };
}
