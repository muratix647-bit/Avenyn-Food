import { describe, expect, it } from 'vitest';
import { formatSek, formatVnd } from './format';

describe('Avenyn Food money formatting', () => {
  it('formats genuine SEK values with the Swedish currency symbol', () => {
    expect(formatSek(200).replace(/\s/g, ' ')).toMatch(/200 kr/);
    expect(formatSek(1234.5).replace(/\s/g, ' ')).toMatch(/1.?234,5 kr/);
  });

  it('does not silently convert old VND demo amounts', () => {
    expect(formatVnd(200)).not.toBe(formatSek(200));
  });

  it('does not present invalid amounts as prices', () => {
    expect(formatSek(Number.NaN)).toBe('—');
  });
});
