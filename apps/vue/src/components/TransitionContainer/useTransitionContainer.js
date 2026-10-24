import { computed } from 'vue';
import { transitionContainer, transitionEffects } from '@/theme';
export function useTransitionContainer(props) {
    const transitionContainerProps = computed(() => {
        const animation = props.animation ?? ['fade'];
        const effects = Array.isArray(animation) ? animation : [animation];
        const phase = props.isOpen ? 'enter' : 'exit';
        const effectClasses = effects.map((effect) => transitionEffects[effect][phase]);
        // Quando fechado, o conteúdo fica invisível mas segue montado: precisamos
        // removê-lo da árvore de acessibilidade e do fluxo de foco do teclado.
        // `inert` só entra como atributo quando ativo — `inert="false"` também
        // desativaria a interação do elemento.
        const isHidden = !props.isOpen;
        const isInert = props.inert ?? isHidden;
        return {
            'aria-hidden': props.ariaHidden ?? (isHidden ? 'true' : undefined),
            ...(isInert ? { inert: true } : {}),
            class: transitionContainer({
                isOpen: props.isOpen,
                class: [effectClasses, props.class],
            }),
        };
    });
    return { transitionContainerProps };
}
