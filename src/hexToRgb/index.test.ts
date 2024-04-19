import { hexToRgb } from "./index";

describe("hexToRgb", () => {
  it("should convert #FF0000 to rgb(255, 0, 0)", () => {
    const hex = "#FF0000";
    const expected = "rgb(255, 0, 0)";

    const result = hexToRgb(hex);

    expect(result).toBe(expected);
  });

  it("should return 'Couleur hexadécimale invalide, ne doit pas être vide'", () => {
    const hex = "";
    const expected = "Couleur hexadécimale invalide, ne doit pas être vide";

    const result = hexToRgb(hex);

    expect(result).toBe(expected);
  });

  it('should return "Couleur hexadécimale invalide, doit commencer par #" for "FF0000"', () => {
    const hex = "FF0000";
    const expected = "Couleur hexadécimale invalide, doit commencer par #";

    const result = hexToRgb(hex);

    expect(result).toBe(expected);
  });

  it('should return "Couleur hexadécimale invalide, doit contenir 3 paires de caractères" for "#FF00"', () => {
    const hex = "#FF00";
    const expected =
      "Couleur hexadécimale invalide, doit contenir 3 paires de caractères";

    const result = hexToRgb(hex);

    expect(result).toBe(expected);
  });

  it('should return "Couleur hexadécimale invalide, caractères invalides" for #FF00ZZ', () => {
    const hex = "#FF00ZZ";
    const expected = "Couleur hexadécimale invalide, caractères invalides";

    const result = hexToRgb(hex);

    expect(result).toBe(expected);
  });
});
