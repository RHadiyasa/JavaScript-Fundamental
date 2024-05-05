function asyncOne(callback) {
  setTimeout(() => {
    console.log("Function One is Done");

    callback();
  }, 1000);
}

function asyncTwo(callback) {
  setTimeout(() => {
    console.log("Function Two is Done");
    callback();
  }, 3000);
}

function asyncThree() {
  setTimeout(() => {
    console.log("Function Three is Done");
  }, 2000);
}

// Ini berguna, ketika misalkan function asyncTwo membutuhkan value yang dihasilkan dari functiona asyncOne.
// Sehingga harus menunggu asyncOne selesai, baru asyncTwo di eksekusi.

asyncOne(() => {
  asyncTwo(() => {
    asyncThree();
  });
});
