// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */
export function translate2d(dx, dy) {
  // This is the outer function that takes the translation amounts (dx and dy).

  return function (x, y) {
    // This is the closure. It captures dx and dy from the outer scope.
    // It takes a coordinate pair (x, y) and applies the translation to it.

    return [x + dx, y + dy];
  };
}

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */
export function scale2d(sx, sy) {
  return function (x, y) {
    return [x * sx, y * sy];
  };
}

/**
 * Create a composition function that returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {function} f the first function to apply
 * @param {function} g the second function to apply
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */
export function composeTransform(f, g) {
  return function (...args) {
    return g(...f(...args));
  };
}

/**
 * Return a function that memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {function} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {function} a function which takes x and y arguments, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */
export function memoizeTransform(f) {
  let lastArgs = null;
  let lastResult = null;

  return function (...args) {
    // Check if the function was called with the same arguments as last time
    const isSameArgs =
      lastArgs !== null &&
      args.length === lastArgs.length &&
      args.every((val, index) => val === lastArgs[index]);

    if (isSameArgs) {
      // Return the last result if the same arguments are provided
      return lastResult;
    } else {
      // If different arguments are provided, update lastArgs and lastResult
      lastArgs = args;
      lastResult = f(...args);
      return lastResult;
    }
  };
}
