// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let sum = 0; // the number you will be returning
  let num1 = '';
  let num2 = '';

  for (let i = 0; i < array1.length; i++) {
    num1 += String(array1[i]);
  }

  for (let i = 0; i < array2.length; i++) {
    num2 += String(array2[i]);
  }

  sum = Number(num1) + Number(num2);

  return sum;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let stringValue = String(value).split('');
  let compareValue = '';

  for (let i = stringValue.length - 1; i >= 0; i--) {
    compareValue += stringValue[i];
  }

  return String(value) == compareValue ? true : false;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  let message = '';
  if (Number(input) > 0) {
    message = '';
  } else if (input === null || input === undefined || input === '') {
    message = 'Required field';
  } else {
    message = 'Must be a number besides 0';
  }
  return message;
}
