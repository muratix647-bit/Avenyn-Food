import { describe, expect, it } from 'vitest';
import { formatSek, formatVnd } from './format';

describe('Avenyn Food budapp money formatting', () => {
  it('formats actual SEK amounts with sv-SE conventions', () => {
    expect(formatSek(200).replace(/\s/g, ' ')).toMatch(/200 kr/);
  });
  it('keeps the VND demo formatter separate until monetary migration', () => {
    expect(formatVnd(200)).not.toBe(formatSek(200));
  });
});
