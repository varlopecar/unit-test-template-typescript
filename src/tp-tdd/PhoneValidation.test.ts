import { PhoneValidation } from "./PhoneValidation";

describe("PhoneValidation", () => {
  it("should throw an error if phone number is empty", () => {
    const input = "";
    const act = () => PhoneValidation.validatePhone(input);
    expect(act).toThrow("Le numéro ne peut pas être vide");
  });

  it("should throw an error if phone number does not contain 10 digits with digits only", () => {
    const input = "061234567";
    const act = () => PhoneValidation.validatePhone(input);
    expect(act).toThrow(
      "Le numéro doit contenir que 10 chiffres au total s'il ne contient pas de séparateur"
    );
  });

  it("should throw an error if phone number contains different separators", () => {
    const input = "06.12/34 56";
    const act = () => PhoneValidation.validatePhone(input);
    expect(act).toThrow("Les séparateurs doivent être identiques");
  });

  it("should throw an error if phone number does not contain 5 pairs of 2 digits with separators", () => {
    const input = "06.12.34.56.7";
    const act = () => PhoneValidation.validatePhone(input);
    expect(act).toThrow(
      "Le numéro doit être composé de 5 paires de deux chiffres quand il contient des séparateurs"
    );
  });

  it("should return the phone number with no separators if it is valid", () => {
    const input = "0627625795";
    const act = PhoneValidation.validatePhone(input);
    expect(act).toBe(input);
  });

  it("should return the phone number with dots if it is valid", () => {
    const input = "08.27.62.57.95";
    const act = PhoneValidation.validatePhone(input);
    expect(act).toBe(input);
  });

  it("should return the phone number with slashes if it is valid", () => {
    const input = "07/27/62/57/95";
    const act = PhoneValidation.validatePhone(input);
    expect(act).toBe(input);
  });

  it("should return the phone number with spaces if it is valid", () => {
    const input = "04 27 62 57 95";
    const act = PhoneValidation.validatePhone(input);
    expect(act).toBe(input);
  });
});

describe("PhoneValidation with valid prefixes", () => {
  const validPrefixes = ["04", "06", "07", "08"];
  validPrefixes.forEach((prefix) => {
    it(`should accept phone number starting with ${prefix}`, () => {
      const input = `${prefix}12345678`;
      const act = PhoneValidation.validatePhone(input);
      expect(act).toBe(input);
    });
  });

  it("should throw an error if phone number does not start with 04, 06, 07 or 08", () => {
    const input = "0123456789";
    const act = () => PhoneValidation.validatePhone(input);
    expect(act).toThrow("Le numéro doit commencer par 04, 06, 07 ou 08");
  });
});

describe("PhoneValidation with separators", () => {
  const validSeparators = [".", "/", " "];
  validSeparators.forEach((separator) => {
    it(`should return phone number with ${separator} as separator`, () => {
      const input = `06${separator}12${separator}34${separator}56${separator}78`;
      const act = PhoneValidation.validatePhone(input);
      expect(act).toBe(input);
    });
  });

  it("should throw an error if phone number contains different separators", () => {
    const input = "06.12/34 56";
    const act = () => PhoneValidation.validatePhone(input);
    expect(act).toThrow("Les séparateurs doivent être identiques");
  });

  it("should throw an error if phone number does not contain 5 pairs of 2 digits with separators", () => {
    const input = "06.12.34.56.7";
    const act = () => PhoneValidation.validatePhone(input);
    expect(act).toThrow(
      "Le numéro doit être composé de 5 paires de deux chiffres quand il contient des séparateurs"
    );
  });

  it("should return the phone number with no separators if it is valid", () => {
    const input = "0627625795";
    const act = PhoneValidation.validatePhone(input);
    expect(act).toBe(input);
  });
});
