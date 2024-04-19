import { regex } from "../utils/regex";

const HEX_TABLE: Record<string, number> = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
};

const hexToDecimal = (hex: string): number => {

  const hexNumber = hex.toUpperCase();
  const firstDigit = hexNumber[0];
  const secondDigit = hexNumber[1];

  const firstDigitValue = HEX_TABLE[firstDigit];
  const secondDigitValue = HEX_TABLE[secondDigit];

  return firstDigitValue * 16 + secondDigitValue;
};

export const parser = (hex: string): number | string => {
  // Vérifier si la chaîne hexadécimale est vide
  if (hex === "") {
    return "Teinte hexadécimale invalide, teinte vide";
  }

  // Vérifier si la chaîne hexadécimale a une longueur de 2 caractères
  if (hex.length !== 2) {
    return "Teinte hexadécimale invalide, la teinte doit contenir 2 caractères";
  }

  // Vérifier si la chaîne hexadécimale contient des caractères valides
  if (!regex.test(hex)) {
    return "Teinte hexadécimale invalide, caractère non valide";
  }

  return hexToDecimal(hex);
};
