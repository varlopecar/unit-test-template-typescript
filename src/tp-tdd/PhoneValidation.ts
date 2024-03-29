import { NumberValidation } from "./NumberValidation";

export class PhoneValidation {
  static validatePhone(input: string): string {
    try {
      NumberValidation.validateNumber(input);
    } catch (error) {
      throw new Error("Le numéro ne peut pas être vide");
    }

    if (
      !input.startsWith("04") &&
      !input.startsWith("06") &&
      !input.startsWith("07") &&
      !input.startsWith("08")
    ) {
      throw new Error("Le numéro doit commencer par 04, 06, 07 ou 08");
    }

    const digitsOnly = input.replace(/[\s./]/g, "");
    if (digitsOnly.length !== 10) {
      throw new Error(
        "Le numéro doit contenir que 10 chiffres au total s'il ne contient pas de séparateur"
      );
    }

    const separators = input.match(/[\s./]/g);
    if (separators) {
      if (new Set(separators).size > 1) {
        throw new Error("Les séparateurs doivent être identiques");
      }

      const pairs = input.split(/[\s./]/);
      if (pairs.length !== 5 || !pairs.every((pair) => pair.length === 2)) {
        throw new Error(
          "Le numéro doit être composé de 5 paires de deux chiffres quand il contient des séparateurs"
        );
      }
    }

    return input;
  }
}
