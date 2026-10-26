<script lang="ts">
  import { formatISOToDateBR, formatToDate } from '@minha-ui/utils';
</script>

<div class="p-10 flex flex-col gap-6 w-[500px]">
  <h2 class="text-lg font-bold">formatToDate – Datas da API para pt-BR</h2>
  <p class="text-sm text-neutral-700">Recebe Date nativo ou string e retorna a data no formato pt-BR (dd/mm/aaaa).</p>
  <div class="mt-4">
    <h3 class="font-semibold">Exemplos:</h3>
    <ul class="list-disc ml-5 mt-2 space-y-1 text-sm text-neutral-700">
      <li><strong>Date nativo:</strong> {new Date(2026, 0, 2).toString()} → <span class="text-green-700">{formatToDate(new Date(2026, 0, 2))}</span></li>
      <li><strong>String ISO:</strong> 2026-01-02 → <span class="text-green-700">{formatToDate('2026-01-02')}</span></li>
      <li><strong>String com outro formato ISO:</strong> 2000-12-25T00:00:00Z → <span class="text-green-700">{formatToDate('2000-12-25T00:00:00Z')}</span></li>
      <li><strong>Data inválida:</strong> invalid string → <span class="text-green-700">{formatToDate('invalid string')}</span></li>
      <li><strong>Hoje:</strong> {new Date().toString()} → <span class="text-green-700">{formatToDate(new Date())}</span></li>
    </ul>
  </div>
</div>

<div class="p-10 flex flex-col gap-6 w-[500px] mt-10">
  <h2 class="text-lg font-bold">formatISOToDateBR – ISO string para dd/mm/aaaa</h2>
  <p class="text-sm text-neutral-700">Recebe uma string ISO (ou yyyy-mm-dd) e retorna a data no formato pt-BR, corrigindo problemas de fuso horário.</p>
  <div class="mt-4">
    <h3 class="font-semibold">Exemplos:</h3>
    <ul class="list-disc ml-5 mt-2 space-y-1 text-sm text-neutral-700">
      <li><strong>ISO básico:</strong> 2026-01-02 → <span class="text-green-700">{formatISOToDateBR('2026-01-02')}</span></li>
      <li><strong>ISO com hora UTC:</strong> 2026-01-02T00:00:00Z → <span class="text-green-700">{formatISOToDateBR('2026-01-02T00:00:00Z')}</span></li>
      <li><strong>ISO com hora local:</strong> 2026-01-02T15:30:00 → <span class="text-green-700">{formatISOToDateBR('2026-01-02T15:30:00')}</span></li>
      <li><strong>Outra data:</strong> 2000-12-25 → <span class="text-green-700">{formatISOToDateBR('2000-12-25')}</span></li>
      <li><strong>Inválida:</strong> invalid → <span class="text-green-700">{formatISOToDateBR('invalid') || 'Inválido'}</span></li>
    </ul>
  </div>
</div>
