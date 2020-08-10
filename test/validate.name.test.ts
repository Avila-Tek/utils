import { validateName } from '../src';

test('should return false (null)', () => {
  expect(validateName(null)).toBe(false);
});
test('should return false (undefined)', () => {
  expect(validateName(undefined)).toBe(false);
});
test("should return false ('')", () => {
  expect(validateName('')).toBe(false);
});
test('should return false ([])', () => {
  expect(validateName([])).toBe(false);
});
test('should return false (Jose (Perez))', () => {
  expect(validateName('Jose (Perez)')).toBe(false);
});
test('should return true (Jose Perez)', () => {
  expect(validateName('Jose Perez')).toBe(true);
});
test('should return true (Jose jr. Perez)', () => {
  expect(validateName('Jose jr. Perez')).toBe(true);
});
test('should return false (Jose Perez-Ramirez)', () => {
  expect(validateName('Jose Perez-Ramirez')).toBe(false);
});
test('should return false (Jose Perez Ramirez 2do)', () => {
  expect(validateName('Jose Perez Ramirez 2do')).toBe(false);
});
