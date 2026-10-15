import { createBandScale, createLinearScale, getNiceTicks } from '..';

describe('createLinearScale', () => {
  it('should map the domain onto the range', () => {
    const scale = createLinearScale({ domain: [0, 100], range: [0, 200] });

    expect(scale(0)).toBe(0);
    expect(scale(50)).toBe(100);
    expect(scale(100)).toBe(200);
  });

  it('should support an inverted range', () => {
    const scale = createLinearScale({ domain: [0, 100], range: [200, 0] });

    expect(scale(0)).toBe(200);
    expect(scale(100)).toBe(0);
  });

  it('should not divide by zero when the domain has no span', () => {
    const scale = createLinearScale({ domain: [10, 10], range: [0, 100] });

    expect(scale(10)).toBe(0);
  });
});

describe('createBandScale', () => {
  it('should compute step, bandwidth, position and center', () => {
    const scale = createBandScale(4, [0, 400], 0.2);

    expect(scale.step).toBe(100);
    expect(scale.bandwidth).toBe(80);
    expect(scale.position(0)).toBe(10);
    expect(scale.center(0)).toBe(50);
    expect(scale.position(1)).toBe(110);
    expect(scale.center(1)).toBe(150);
  });

  it('should handle an empty dataset', () => {
    const scale = createBandScale(0, [0, 400]);

    expect(scale.step).toBe(0);
    expect(scale.bandwidth).toBe(0);
    expect(scale.position(0)).toBe(0);
    expect(scale.center(0)).toBe(0);
  });
});

describe('getNiceTicks', () => {
  it('should round the domain and produce nice ticks', () => {
    expect(getNiceTicks(0, 100)).toEqual({
      min: 0,
      max: 100,
      ticks: [0, 20, 40, 60, 80, 100],
    });
  });

  it('should pick a coarser step for larger spans', () => {
    expect(getNiceTicks(0, 1000)).toEqual({
      min: 0,
      max: 1000,
      ticks: [0, 200, 400, 600, 800, 1000],
    });
  });

  it('should extend the domain to a nice maximum', () => {
    expect(getNiceTicks(0, 55)).toEqual({
      min: 0,
      max: 60,
      ticks: [0, 10, 20, 30, 40, 50, 60],
    });
  });

  it('should fall back to a unit span when there is no span', () => {
    expect(getNiceTicks(0, 0)).toEqual({
      min: 0,
      max: 1,
      ticks: [0, 1],
    });
  });

  it('should fall back to a unit span when the max is below the min', () => {
    expect(getNiceTicks(10, 5)).toEqual({
      min: 10,
      max: 11,
      ticks: [10, 11],
    });
  });
});
