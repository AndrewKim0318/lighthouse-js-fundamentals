function range(start, end, step){
  var array = [];

  if (end < start || step < 0){
    return array;
  } else if (start === undefined || end === undefined || step === undefined){
    return array;
  } else {
    var number = start;
    array = [number];
    while (number < end){
      number += step;
      if (number <= end){
        array.push(number);
      }
    }
    return array;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(2,4));
console.log(range(4,2,2));
console.log(range(4,2,-2));