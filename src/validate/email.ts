import validateString from './string';
/**
 * @function validateEmail
 * @param {any} email
 * @returns {boolean}
 */
export default function validateEmail(email: any): boolean {
  if (!validateString(email)) {
    return false;
  }
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
  return regex.test(email);
}
