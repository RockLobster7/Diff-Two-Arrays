// Diff Two Arrays

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  var longArr = [];
  var shortArr = [];
  var result = [];

  //determine which is the longest array
  if (arr1.length > arr2.length) {
    longArr = arr1;
    shortArr = arr2;
  } else {
    longArr = arr2;
    shortArr = arr1;
  }

//process each element of the long array checking if it exists in the short array
  for (i = 0; i < longArr.length; i++) {

    if (shortArr.every(function (arg) {
        return arg != longArr[i];
      })

    ) {
      result.push(longArr[i]);
    }
  }

  return result;
}

// diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(diffArray(["al", 1, "george", 5, "pee", "cat"], [6, "pee", 11, "pop", 9, 5, 2, 10]));

// console.log(diffArray ([1, 2, 3, 5], [1, 2, 3, 4, 5])); //should return an array.
// console.log(diffArray (["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); // should return ["pink wool"].
// console.log(diffArray (["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); //should return ["diorite", "pink wool"].
// console.log(diffArray (["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])); // should return [].
// console.log(diffArray ([1, 2, 3, 5], [1, 2, 3, 4, 5])); // should return [4].
// console.log(diffArray ([1, "calf", 3, "piglet"], [1, "calf", 3, 4])); // should return ["piglet", 4].
// console.log(diffArray ([], ["snuffleupagus", "cookie monster", "elmo"])); // should return ["snuffleupagus", "cookie monster", "elmo"].
// console.log(diffArray ([1, "calf", 3, "piglet"], [7, "filly"])); // should return [1, "calf", 3, "piglet", 7, "filly"].