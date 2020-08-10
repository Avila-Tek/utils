/**
 * @function validateNumber
 * @param {any} number
 * @returns {boolean}
 */
export default function validateNumber(number: any): boolean {
  if (number === null || number === undefined || number === false) {
    return false;
  }
  if (Array.isArray(number)) {
    return false;
  }
  if (String(number).trim().length <= 0) {
    return false;
  }
  const _number = Number(number);
  return !Number.isNaN(_number);
}
