export class NumberValidation {
  static validateNumber(input: string): number {
    const number = Number(input);
    if (isNaN(number)) {
      throw new Error("La valeur doit représenter un nombre");
    }
    return number;
  }

  static validateInteger(input: string): number {
    const number = NumberValidation.validateNumber(input);
    if (!Number.isInteger(number)) {
      throw new Error("La valeur doit représenter un nombre entier");
    }
    return number;
  }

  static validatePositive(input: string): number {
    const number = NumberValidation.validateInteger(input);
    if (number <= 0) {
      throw new Error(" La valeur doit représenter un nombre positif");
    }
    return number;
  }
}
