import { computed, onMounted } from 'vue';
import { progress, progressSheet } from '@/theme';
const { core, wrapper } = progress();
export function useProgress(props) {
    const size = computed(() => props.size ?? 'md');
    const color = computed(() => props.color ?? 'primary');
    const animated = computed(() => props.animated ?? true);
    const value = computed(() => props.value ?? 25);
    const valuePercentage = computed(() => {
        const v = value.value / 100;
        return new Intl.NumberFormat('pt-BR', { style: 'percent', minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(v);
    });
    onMounted(() => {
        if (!progressSheet)
            return;
        if ('adoptedStyleSheets' in document) {
            if (!document.adoptedStyleSheets.includes(progressSheet)) {
                document.adoptedStyleSheets = [...document.adoptedStyleSheets, progressSheet];
            }
        }
    });
    const wrapperProps = computed(() => ({
        'data-testid': 'progress-wrapper',
        class: wrapper({ animated: animated.value, color: color.value, size: size.value }),
    }));
    const coreProps = computed(() => ({
        'data-testid': 'progress-core',
        style: { width: valuePercentage.value },
        class: core({ animated: animated.value, color: color.value, size: size.value, class: props.class }),
    }));
    return { coreProps, wrapperProps };
}
