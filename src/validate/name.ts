import validateString from './string';

/**
 * @function validateName
 * @param {any} name a string for checking if valid
 * @returns {boolean}
 */
export default function validateName(name: any): boolean {
  if (!validateString(name)) {
    return false;
  }
  const regex = /^([a-z\u00C0-\u02AB'´`]{1,}\.?\s?)([a-z\u00C0-\u02AB'´`]?\.?\s?)+$/i;
  return regex.test(name);
}
