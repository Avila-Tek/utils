import { validateString } from '../src';

test('should return false (null)', () => {
  expect(validateString(null)).toBe(false);
});
test('should return false (undefined)', () => {
  expect(validateString(undefined)).toBe(false);
});
test("should return false ('')", () => {
  expect(validateString('')).toBe(false);
});
test('should return false ([])', () => {
  expect(validateString([])).toBe(false);
});
test('should return true (hola)', () => {
  expect(validateString('hola')).toBe(true);
});
