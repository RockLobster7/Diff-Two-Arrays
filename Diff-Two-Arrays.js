// Diff Two Arrays

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  var result = [];

  for (i = 0; i < arr1.length; i++) {   //cycle through array1
    if (!arr2.includes(arr1[i])) {      //if the element is NOT found in array2
      result.push(arr1[i]);             //store the result
    }
  }

  for (i = 0; i < arr2.length; i++) {   //cycle through array2
    if (!arr1.includes(arr2[i])) {
      result.push(arr2[i]);
    }
  }  

  return result;
}


console.log(diffArray ([1, 2, 3, 5], [1, 2, 3, 4, 5])); //should return an array.
console.log(diffArray (["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); // should return ["pink wool"].
console.log(diffArray (["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); //should return ["diorite", "pink wool"].
console.log(diffArray (["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])); // should return [].
console.log(diffArray ([1, 2, 3, 5], [1, 2, 3, 4, 5])); // should return [4].
console.log(diffArray ([1, "calf", 3, "piglet"], [1, "calf", 3, 4])); // should return ["piglet", 4].
console.log(diffArray ([], ["snuffleupagus", "cookie monster", "elmo"])); // should return ["snuffleupagus", "cookie monster", "elmo"].
console.log(diffArray ([1, "calf", 3, "piglet"], [7, "filly"])); // should return [1, "calf", 3, "piglet", 7, "filly"].