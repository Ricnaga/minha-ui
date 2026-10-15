import { vi } from 'vitest';

export const FROZEN_NOW = new Date('2024-01-15T12:00:00');

export function freezeDate(date: Date = FROZEN_NOW): void {
  vi.useFakeTimers({ toFake: ['Date'] });
  vi.setSystemTime(date);
}

export function restoreDate(): void {
  vi.useRealTimers();
}
