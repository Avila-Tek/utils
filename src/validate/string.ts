/**
 * @function validateString
 * @param {any} string
 * @returns {boolean}
 */
export default function validateString(string: any): boolean {
  if (string === null || string === undefined) {
    return false;
  }
  if (
    String(string).trim() === '' ||
    String(string).length <= 0 ||
    String(string).trim().length <= 0
  ) {
    return false;
  }
  return true;
}
