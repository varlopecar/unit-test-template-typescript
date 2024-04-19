import { NumberValidation } from "./NumberValidation";

export class AgeValidation {
  static validateAge(input: string): number {
    try {
      return NumberValidation.validatePositive(input);
    } catch (error) {
      throw new Error("L'age doit représenter un nombre entier positif");
    }
  }

  static validateAdult(input: string): number {
    const age = AgeValidation.validateAge(input);
    if (age < 18 || age > 130) {
      throw new Error("L'age doit être compris entre 18 et 130 ans");
    }
    return age;
  }
}
