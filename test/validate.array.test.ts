import { validateArray } from '../src';

test('should return false (null)', () => {
  expect(validateArray(null)).toBe(false);
});
test('should return false (undefined)', () => {
  expect(validateArray(undefined)).toBe(false);
});
test('should return false (string)', () => {
  expect(validateArray('')).toBe(false);
});
test('should return false (number)', () => {
  expect(validateArray(0)).toBe(false);
});
test('should return false ([])', () => {
  expect(validateArray([])).toBe(false);
});
test('should return true ([1])', () => {
  expect(validateArray([1])).toBe(true);
});
