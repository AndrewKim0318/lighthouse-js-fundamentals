function printNumbers (){

  let start = 100;
  let end = 200;
  let number = start;

  while (number <= end){
    if (number % 3 === 0 && number % 4 === 0){
      console.log("LoopyLighthouse");
    } else if (number % 3 === 0) {
      console.log("Loopy");
    } else if (number % 4 === 0) {
      console.log("Lighthouse");
    } else {
      console.log(number);
    }
    number++;
  }
}

printNumbers();