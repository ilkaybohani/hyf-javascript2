


//3.2 a function that takes 4 arguments.
const sayThree = (num) => console.log(num + " is divisible by three");

const sayFive = (num) => console.log(num + " is divisible by five");

const arrayIterator = (startIndex, stopIndex, threeCallback, fiveCallback) => {
    const values = [];

  
    for (let i = startIndex; i <= stopIndex; i++) {
      values.push(i)
      console.log(values);
    }
  
    values.map((item) => {
      if (item % 3 === 0) {
        threeCallback(item);
      }
  
      if (item % 5 === 0) {
        fiveCallback(item);
      }
  
    });
  }
  
  arrayIterator(10, 15, sayThree, sayFive);