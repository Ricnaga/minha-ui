import { fn } from 'storybook/test';
import { defineComponent, ref } from 'vue';
import { Backdrop } from '../';
import { testDefaultBackdrop } from './Backdrop.play';
const meta = {
    title: 'Components/Estruturas/Backdrop',
    component: Backdrop,
    parameters: {
        layout: 'centered',
    },
    args: {
        zIndex: 1000,
        isLoading: false,
        onClose: fn(),
    },
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    render: (args) => {
        return defineComponent({
            components: { Backdrop },
            setup() {
                const isOpen = ref(false);
                setTimeout(() => {
                    isOpen.value = false;
                }, 3000);
                const open = () => {
                    isOpen.value = true;
                    setTimeout(() => {
                        isOpen.value = false;
                    }, 3000);
                };
                return { args, isOpen, open };
            },
            template: `
        <div class="text-center">
          <button
            @click="open"
            class="cursor-pointer bg-blue-600 rounded p-2 text-white"
          >
            Ativar backdrop
          </button>
          <p>Após 3 segundos o backdrop retorna ao estado inicial</p>
          <Backdrop v-bind="args" :is-open="isOpen" />
        </div>
      `,
        });
    },
    play: testDefaultBackdrop,
};
