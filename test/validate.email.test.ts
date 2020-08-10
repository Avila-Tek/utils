import { validateEmail } from '../src';

test('should return false (null)', () => {
  expect(validateEmail(null)).toBe(false);
});
test('should return false (undefined)', () => {
  expect(validateEmail(undefined)).toBe(false);
});
test("should return false ('')", () => {
  expect(validateEmail('')).toBe(false);
});
test('should return false ([])', () => {
  expect(validateEmail([])).toBe(false);
});
test('should return false (hola)', () => {
  expect(validateEmail('hola')).toBe(false);
});
test('should return true (example@example.com)', () => {
  expect(validateEmail('example@example.com')).toBe(true);
});
test('should return true (example12@example.com)', () => {
  expect(validateEmail('example12@example.com')).toBe(true);
});
test('should return true (example_12@example.com)', () => {
  expect(validateEmail('example_12@example.com')).toBe(true);
});
test('should return false (example@12@example.com)', () => {
  expect(validateEmail('example@12@example.com')).toBe(false);
});
test('should return true (example12@app.example.com)', () => {
  expect(validateEmail('example12@app.example.com')).toBe(true);
});
