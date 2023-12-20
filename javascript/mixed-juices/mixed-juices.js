// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let timeToMix = 0;

  switch (name) {
    case 'Pure Strawberry Joy':
      timeToMix = 0.5;
      break;
    case 'Energizer':
    case 'Green Garden':
      timeToMix = 1.5;
      break;
    case 'Tropical Island':
      timeToMix = 3;
      break;
    case 'All or Nothing':
      timeToMix = 5;
      break;
    default:
      timeToMix = 2.5;
  }

  return timeToMix;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedges = 0;
  let limesCut = 0;
  let i = 0;

  // while wedges is less than the wedges needs
  // AND
  // i is less than the array length
  while (wedges < wedgesNeeded && i < limes.length) {
    let currentLimeWedges = 0;

    //when in lime[n], if lime[n] == small, medium, large
    // set currentLimeWedges to that values
    switch (limes[i]) {
      case 'small':
        currentLimeWedges = 6;
        break;
      case 'medium':
        currentLimeWedges = 8;
        break;
      default:
        currentLimeWedges = 10;
    }

    // if wedges + currentLimeWedges is LESS THAN OR EQUAL TO wedges needed
    // than add the value of currentLimeWedges to wedges
    // and increase the value of the limes you have cut (limesCut)
    if (wedges + currentLimeWedges <= wedgesNeeded) {
      wedges += currentLimeWedges;
      limesCut++;
    } else {
      // If adding the current lime's wedges exceeds the needed count,
      // cut the lime to slightly exceed the target
      limesCut++;
      break;
    }

    i++; // this just allows you to go through the loop
  }

  return limesCut;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  //This condition checks whether there's still time left in the shift to prepare orders.
  // The loop will continue as long as there's remaining time.
  // AND
  // This condition ensures there are still orders pending to be prepared.
  // The loop will continue as long as there are orders in the array.
  //
  // The loop continues until either there's no more time left or all orders have been prepared.
  // Once one of these conditions is met, the loop terminates.
  while (timeLeft > 0 && orders.length > 0) {
    timeLeft -= timeToMixJuice(orders[0]); // It deducts the time it takes to mix the first juice in the orders array from the remaining time (timeLeft).
    orders.shift(); // removes the first element (the juice that was just prepared) from the orders array using the shift() method.
  }
  // After the loop exits, the function returns the remaining orders that couldn’t be prepared within the allocated time.
  return orders;
}
