import { validatePhone } from '../src';

test('should return false (null)', () => {
  expect(validatePhone(null)).toBe(false);
});
test('should return false (undefined)', () => {
  expect(validatePhone(undefined)).toBe(false);
});
test("should return false ('')", () => {
  expect(validatePhone('')).toBe(false);
});
test('should return false (number)', () => {
  expect(validatePhone(0)).toBe(false);
});
test('should return false ([])', () => {
  expect(validatePhone([])).toBe(false);
});
test('should return true (hola)', () => {
  expect(validatePhone('hola')).toBe(false);
});
test('should return true (111111111)', () => {
  expect(validatePhone('111111111')).toBe(true);
});
test('should return false (111111111111111111)', () => {
  expect(validatePhone('111111111111111111')).toBe(false);
});
test('should return true (04121111111)', () => {
  expect(validatePhone('04121111111')).toBe(true);
});
test('should return true (+584121111111)', () => {
  expect(validatePhone('+584121111111')).toBe(true);
});
