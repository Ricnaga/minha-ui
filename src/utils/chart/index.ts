export interface LinearScaleOptions {
  domain: [number, number];
  range: [number, number];
}

/**
 * Cria uma escala linear que mapeia um domínio numérico para um range numérico.
 * Útil para o eixo Y (valores → pixels), inclusive invertido (`range` invertido).
 */
export function createLinearScale({ domain, range }: LinearScaleOptions) {
  const [domainMin, domainMax] = domain;
  const [rangeStart, rangeEnd] = range;
  const domainSpan = domainMax - domainMin || 1;

  return (value: number) =>
    rangeStart + ((value - domainMin) / domainSpan) * (rangeEnd - rangeStart);
}

export interface BandScale {
  step: number;
  bandwidth: number;
  position: (index: number) => number;
  center: (index: number) => number;
}

/**
 * Cria uma escala de bandas (categórica) para o eixo X.
 * `padding` (0–1) define a proporção de respiro entre as bandas.
 */
export function createBandScale(
  count: number,
  range: [number, number],
  padding = 0.2,
): BandScale {
  const [rangeStart, rangeEnd] = range;
  const step = count > 0 ? (rangeEnd - rangeStart) / count : 0;
  const bandwidth = step * (1 - padding);

  return {
    step,
    bandwidth,
    position: (index) => rangeStart + step * index + (step - bandwidth) / 2,
    center: (index) => rangeStart + step * index + step / 2,
  };
}

export interface NiceTicks {
  min: number;
  max: number;
  ticks: number[];
}

/**
 * Calcula um domínio "arredondado" e ticks com passo agradável (`1/2/5/10 × 10ⁿ`).
 */
export function getNiceTicks(
  dataMin: number,
  dataMax: number,
  tickCount = 5,
): NiceTicks {
  if (dataMax <= dataMin) {
    return { min: dataMin, max: dataMin + 1, ticks: [dataMin, dataMin + 1] };
  }

  const rawStep = (dataMax - dataMin) / tickCount;
  const magnitude = 10 ** Math.floor(Math.log10(rawStep));
  const residual = rawStep / magnitude;

  const multiplier =
    residual < 1.5 ? 1 : residual < 3 ? 2 : residual < 7 ? 5 : 10;
  const step = multiplier * magnitude;

  const min = Math.floor(dataMin / step) * step;
  const max = Math.ceil(dataMax / step) * step;

  const ticks: number[] = [];
  for (let value = min; value <= max + step / 2; value += step) {
    ticks.push(Number(value.toFixed(10)));
  }

  return { min, max, ticks };
}
