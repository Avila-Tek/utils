import { validateNumber } from '../src';

test('should return false (null)', () => {
  expect(validateNumber(null)).toBe(false);
});
test('should return false (undefined)', () => {
  expect(validateNumber(undefined)).toBe(false);
});
test("should return false ('')", () => {
  expect(validateNumber('')).toBe(false);
});
test('should return false ([])', () => {
  expect(validateNumber([])).toBe(false);
});
test('should return false (hola)', () => {
  expect(validateNumber('hola')).toBe(false);
});
test('should return false ({})', () => {
  expect(validateNumber({})).toBe(false);
});
test('should return true (1)', () => {
  expect(validateNumber(1)).toBe(true);
});
