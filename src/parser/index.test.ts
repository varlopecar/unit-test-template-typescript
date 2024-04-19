import { parser } from "./index";

describe("parser", () => {
  it.each([
    { hex: "FF", expected: 255 },
    { hex: "00", expected: 0 },
    { hex: "E6", expected: 230 },
    { hex: "25", expected: 37 },
    { hex: "7F", expected: 127 },
    { hex: "FF", expected: 255 },
  ])("should convert %p to %p", ({ hex, expected }) => {
    expect(parser(hex)).toBe(expected);
  });

  it("should return 'Teinte hexadécimale invalide, teinte vide' for ''", () => {
    const hex = "";
    const expected = "Teinte hexadécimale invalide, teinte vide";

    const result = parser(hex);

    expect(result).toBe(expected);
  });

  it.each([
    {
      hex: "B",
      expected:
        "Teinte hexadécimale invalide, la teinte doit contenir 2 caractères",
    },
    {
      hex: "2BC",
      expected:
        "Teinte hexadécimale invalide, la teinte doit contenir 2 caractères",
    },
  ])("should return %p for %p", ({ hex, expected }) => {
    expect(parser(hex)).toBe(expected);
  });

  it.each([
    {
      hex: "-G",
      expected: "Teinte hexadécimale invalide, caractère non valide",
    },
    {
      hex: "1.",
      expected: "Teinte hexadécimale invalide, caractère non valide",
    },
    {
      hex: "G0",
      expected: "Teinte hexadécimale invalide, caractère non valide",
    },
    {
      hex: "0G",
      expected: "Teinte hexadécimale invalide, caractère non valide",
    },
  ])("should return %p for %p", ({ hex, expected }) => {
    expect(parser(hex)).toBe(expected);
  });
});
