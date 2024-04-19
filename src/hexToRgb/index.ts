import { parser } from "../parser";
import { regex } from "../utils/regex";

export const hexToRgb = (hex: string): string => {
  if (hex === "") {
    return "Couleur hexadécimale invalide, ne doit pas être vide";
  }

  if (!hex.startsWith("#")) {
    return "Couleur hexadécimale invalide, doit commencer par #";
  }

  // Enlever le symbole # de la chaîne hexadécimale
  hex = hex.slice(1);

  if (hex.length !== 6) {
    return "Couleur hexadécimale invalide, doit contenir 3 paires de caractères";
  }

  if (!regex.test(hex)) {
    return "Couleur hexadécimale invalide, caractères invalides";
  }

  const red = parser(hex.slice(0, 2));
  const green = parser(hex.slice(2, 4));
  const blue = parser(hex.slice(4, 6));

  return `rgb(${red}, ${green}, ${blue})`;
};
