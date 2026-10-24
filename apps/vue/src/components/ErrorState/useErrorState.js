import { computed } from 'vue';
import { errorState } from '@/theme';
export const DEFAULT_ERROR_MESSAGE = 'Algo deu errado';
export function useErrorState(props) {
    const slots = errorState();
    const rootProps = computed(() => ({
        class: slots.root({ class: props.class }),
    }));
    const imageProps = computed(() => ({ class: slots.image() }));
    const titleProps = computed(() => ({ class: slots.title() }));
    const messageProps = computed(() => ({ class: slots.message() }));
    const actionProps = computed(() => ({ class: slots.action() }));
    const message = computed(() => props.message === undefined ? DEFAULT_ERROR_MESSAGE : props.message);
    return {
        rootProps,
        imageProps,
        titleProps,
        messageProps,
        actionProps,
        image: computed(() => props.image),
        title: computed(() => props.title),
        message,
        action: computed(() => props.action),
    };
}
