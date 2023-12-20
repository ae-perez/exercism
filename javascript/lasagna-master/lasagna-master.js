/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
  let message = '';
  if (remainingTime === 0) {
    message = 'Lasagna is done.';
  } else if (remainingTime > 0) {
    message = 'Not done, please wait.';
  } else if (isNaN(remainingTime)) {
    message = 'You forgot to set the timer.';
  }

  return message;
}

export function preparationTime(layers, avgPrepTime) {
  let prepTime = 0;

  if (isNaN(avgPrepTime)) {
    prepTime = layers.length * 2;
  } else {
    prepTime = layers.length * avgPrepTime;
  }

  return prepTime;
}

export function quantities(layers) {
  //noodle layer =  50 grams
  // sauce = 0.2 liters
  let LasagnaQuantities = {
    noodles: 0,
    sauce: 0,
  };

  for (let i = 0; i < layers.length; i++) {
    if (layers[i] === 'noodles') {
      LasagnaQuantities.noodles += 50;
    } else if (layers[i] === 'sauce') {
      LasagnaQuantities.sauce += 0.2;
    }
  }

  return LasagnaQuantities;
}

export function addSecretIngredient(friendsList, myList) {
  let friendIngredient = friendsList[friendsList.length - 1];
  myList = myList.push(friendIngredient);
}

export function scaleRecipe(recipe, portions) {
  let scaledRecipe = {};

  for (let ingredient in recipe) {
    scaledRecipe[ingredient] = (recipe[ingredient] / 2) * portions;
  }

  console.log(scaleRecipe);

  return scaledRecipe;
}
