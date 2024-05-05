function asyncSum(a, b, callback) {
  setTimeout(() => {
    let result = 0;

    result = a + b;
    console.log("Sum is Done");
    console.log(`${a} + ${b} = ${result}`);

    callback(result);
  }, 2000);
}

function asyncMultiply(a, b, callback) {
  setTimeout(() => {
    let result = 0;

    result = a * b;
    console.log("Multiply is Done");
    console.log(`${a} * ${b} = ${result}`);
    callback(result);
  });
}

function asyncSubtract(a, b, callback) {
  setTimeout(() => {
    let result = 0;

    result = a - b;
    console.log("Substract is Done");
    console.log(`${a} - ${b} = ${result}`);
    callback(result);
  });
}

function asyncDivide(a, b, callback) {
  setTimeout(() => {
    let result = 0;

    result = a / b;
    console.log("Dividing is Done");
    console.log(`${a} / ${b} = ${result}`);
    callback(result);
  });
}

function displayResult(result) {
  console.log(`Your Results is ${result}`);
}

const a = 5;
const b = 100;
const c = 2;

asyncSum(a, b, (sumResult) => {
  asyncMultiply(sumResult, c, (multiplyResult) => {
    asyncSubtract(multiplyResult, sumResult, (subtractResult) => {
      asyncDivide(subtractResult, sumResult, (dividedResult) => {
        displayResult(dividedResult);
      });
    });
  });
});
