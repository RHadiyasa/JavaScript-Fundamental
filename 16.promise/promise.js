function asyncOne() {
  return new Promise((resolve, reject) => {
    // Resolve -> Dipanggil ketika functionnnya sukses
    // Reject -> Dipanggil ketika functionnnya gagal
    setTimeout(() => {
      resolve("Function One is Done");
    }, 2000);
  });
}

function asyncTwo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Function Two is Done");
    }, 100);
  });
}

function asyncThree() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Function Three is Done");
    }, 500);
  });
}

asyncOne()
  .then((result) => {
    console.log(result);

    return asyncTwo();
  })
  .then((result2) => {
    console.log(result2);
    return asyncThree();
  })
  .then((result3) => {
    console.log(result3);
  });
