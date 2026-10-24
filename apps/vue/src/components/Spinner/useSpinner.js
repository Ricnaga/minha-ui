import { computed, onMounted, } from 'vue';
import { spinner, spinnerSheet } from '@/theme';
export function useSpinner(props) {
    const { container, wrapper, icon } = spinner();
    onMounted(() => {
        if (!spinnerSheet)
            return;
        document.adoptedStyleSheets = [
            ...document.adoptedStyleSheets,
            spinnerSheet,
        ];
    });
    const containerProps = {
        class: container(),
        role: 'status',
        'aria-busy': 'true',
    };
    const wrapperProps = {
        class: wrapper(),
    };
    const svgProps = computed(() => ({
        viewBox: '25 25 50 50',
        class: icon({
            color: props.color,
            thickness: props.thickness,
            class: props.class,
        }),
    }));
    return { containerProps, wrapperProps, svgProps };
}
