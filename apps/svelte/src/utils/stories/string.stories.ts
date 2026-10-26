import type { Meta, StoryObj } from '@storybook/svelte';
import { formatISOToDateBR, formatToDate } from '@minha-ui/utils';

const meta: Meta = {
  title: 'Utils/String',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const FormatToDate: StoryObj = {
  render: () => ({
    Component: {
      setup() {
        const examples = [
          { label: 'Date nativo', value: new Date(2026, 0, 2) },
          { label: 'String ISO', value: '2026-01-02' },
          { label: 'String com outro formato ISO', value: '2000-12-25T00:00:00Z' },
          { label: 'Data inválida', value: 'invalid string' },
          { label: 'Hoje', value: new Date() },
        ];
        return { examples, formatToDate };
      },
      template: `
        <div class="p-10 flex flex-col gap-6 w-[500px]">
          <h2 class="text-lg font-bold">formatToDate – Datas da API para pt-BR</h2>
          <p class="text-sm text-neutral-700">Recebe Date nativo ou string e retorna a data no formato pt-BR (dd/mm/aaaa).</p>
          <div class="mt-4">
            <h3 class="font-semibold">Exemplos:</h3>
            <ul class="list-disc ml-5 mt-2 space-y-1 text-sm text-neutral-700">
              {#each examples as ex}
                <li><strong>{ex.label}:</strong> {ex.value} → <span class="text-green-700">{formatToDate(ex.value)}</span></li>
              {/each}
            </ul>
          </div>
        </div>
      `,
    },
  }),
};

export const FormatISOToDateBR: StoryObj = {
  render: () => ({
    Component: {
      setup() {
        const examples = [
          { label: 'ISO básico', value: '2026-01-02' },
          { label: 'ISO com hora UTC', value: '2026-01-02T00:00:00Z' },
          { label: 'ISO com hora local', value: '2026-01-02T15:30:00' },
          { label: 'Outra data', value: '2000-12-25' },
          { label: 'Inválida', value: 'invalid' },
        ];
        return { examples, formatISOToDateBR };
      },
      template: `
        <div class="p-10 flex flex-col gap-6 w-[500px]">
          <h2 class="text-lg font-bold">formatISOToDateBR – ISO string para dd/mm/aaaa</h2>
          <p class="text-sm text-neutral-700">Recebe uma string ISO (ou yyyy-mm-dd) e retorna a data no formato pt-BR, corrigindo problemas de fuso horário.</p>
          <div class="mt-4">
            <h3 class="font-semibold">Exemplos:</h3>
            <ul class="list-disc ml-5 mt-2 space-y-1 text-sm text-neutral-700">
              {#each examples as ex}
                <li><strong>{ex.label}:</strong> {ex.value} → <span class="text-green-700">{formatISOToDateBR(ex.value) || 'Inválido'}</span></li>
              {/each}
            </ul>
          </div>
        </div>
      `,
    },
  }),
};
