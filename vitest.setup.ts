import '@testing-library/jest-dom';
import { toHaveNoViolations } from 'jest-axe';
import { expect } from 'vitest';

expect.extend(toHaveNoViolations);

Object.defineProperty(document, 'adoptedStyleSheets', {
  writable: true,
  value: [],
});
