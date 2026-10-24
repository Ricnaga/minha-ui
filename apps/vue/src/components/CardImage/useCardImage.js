import { computed } from 'vue';
import { cardImage } from '@/theme';
export function useCardImage(props) {
    const cardImageProps = computed(() => ({
        class: cardImage({
            rounded: props.rounded,
            aspect: props.aspect,
            class: props.class,
        }),
    }));
    return { cardImageProps };
}
