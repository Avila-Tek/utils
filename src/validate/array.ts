/**
 * @function validateArray
 * @param {any} array a candidate to evaluate if it an array
 * @returns {boolean}
 */
export default function validateArray(array: any): boolean {
  if (array === null || array === undefined) {
    return false;
  }
  if (!Array.isArray(array)) {
    return false;
  }
  return array.length > 0;
}
