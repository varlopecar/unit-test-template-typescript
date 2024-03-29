import { AgeValidation } from './AgeValidation';

describe('AgeValidation', () => {
  describe('validateAge', () => {
    it('should return the input as a number if it is a positive integer', () => {
      expect(AgeValidation.validateAge('25')).toBe(25);
    });

    it('should throw an error if the input is not a positive integer', () => {
      expect(() => AgeValidation.validateAge('-1')).toThrow("L'age doit représenter un nombre entier positif");
      expect(() => AgeValidation.validateAge('abc')).toThrow("L'age doit représenter un nombre entier positif");
    });
  });

  describe('validateAdult', () => {
    it('should return the input as a number if it is between 18 and 130', () => {
      expect(AgeValidation.validateAdult('25')).toBe(25);
    });

    it('should throw an error if the age is not between 18 and 130', () => {
      expect(() => AgeValidation.validateAdult('17')).toThrow("L'age doit être compris entre 18 et 130 ans");
      expect(() => AgeValidation.validateAdult('131')).toThrow("L'age doit être compris entre 18 et 130 ans");
    });
  });
});