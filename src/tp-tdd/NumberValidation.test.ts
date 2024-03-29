import { NumberValidation } from './NumberValidation';

describe('NumberValidation', () => {
  it('validateNumber should return a number when a valid number string is provided', () => {
    const input = "123";
    const output = NumberValidation.validateNumber(input);
    expect(output).toBe(123);
  });

  it('validateNumber should throw an error when a non-number string is provided', () => {
    const input = "abc";
    expect(() => NumberValidation.validateNumber(input)).toThrow("La valeur doit représenter un nombre");
  });

  it('validatePositive should throw an error when a negative number string is provided', () => {
    const input = "-5";
    expect(() => NumberValidation.validatePositive(input)).toThrow(" La valeur doit représenter un nombre positif");
  });
});