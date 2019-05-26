function lastIndexOf(array, value){

  //check to see if the array is empty
  if(array.length < 1){
    return -1;
  } else {
  //check to see if value is within the array
    let exist = false;
    for(let i = 0 ; i < array.length ; i++){
      if (array[i] === value){
        exist = true;
        break;
      }
    }
  // find the last time the value is indexed in array
    if (exist === true){
      for(let i = 0 ; i < array.length ; i++){
        let j = array.length - i - 1;
        if (array[j] === value){
          return j
        }
      }
    } else {
      return -1;
    }
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
