import { computed } from 'vue';
import { cardFooter } from '@/theme';
export function useCardFooter(props) {
    const cardFooterProps = computed(() => ({
        class: cardFooter({
            align: props.align,
            wrap: props.wrap,
            divider: props.divider,
            class: props.class,
        }),
    }));
    return { cardFooterProps };
}
