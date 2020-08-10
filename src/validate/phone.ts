import validateString from './string';

/**
 * @function validatePhone
 * @param {any} phone
 * @returns {boolean}
 */
export default function validatePhone(phone: any): boolean {
  if (!validateString(phone)) {
    return false;
  }
  if (String(phone).length < 9) {
    return false;
  }
  if (String(phone).length >= 16) {
    return false;
  }
  const regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
  return regex.test(String(phone));
}
