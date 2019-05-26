function merge (array1, array2) {
  let mergedArray = [];

  for (let i = 0; i < array1.length; i++){
    mergedArray.push(array1[i]);
  }

  for (let i = 0; i < array2.length; i++){
    mergedArray.push(array2[i]);
  }

  //sort the values from least to greatest
  for (let i = 0; i < mergedArray.length; i++){
    if (mergedArray[i] < mergedArray[i - 1]){
      [mergedArray[i - 1], mergedArray[i]] = [mergedArray[i], mergedArray[i - 1]];
      i = 0;
    }
  }

  return mergedArray;

}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);