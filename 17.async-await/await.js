function asyncSum(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = 0;

      result = a + b;
      console.log("Sum is Done");
      console.log(`${a} + ${b} = ${result}`);
      resolve(result);
    }, 1500);
  });
}

function asyncMultiply(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = 0;

      result = a * b;
      console.log("Multiply is Done");
      console.log(`${a} * ${b} = ${result}`);

      resolve(result);
    }, 1000);
  });
}

// asyncSum(5, 10)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// MENDEKLARASIKAN FUNGSI YANG MENJALANKAN PROSES Asynchronous
// CARA 1
async function main() {
  // keyword await memberi tahu bahwa ada proses async sehingga menunggu prosesnya selesai.
  // Artinya menunggu proses asyncSum selesai dulu baru lanjut ke code berikutnya.
  // Sama seperti menggunakan .then cuma lebih singkat.
  const sumResult = await asyncSum(5, 10);
  await asyncMultiply(sumResult, 10);

  //   console.log(sumResult);
  //   console.log(multiplyResult);
}

// CARA 2 -> Arrow function
const main2 = async () => {
  console.log("----- ARROW FUNCTION ------");
  const sumResult = await asyncSum(5, 10);
  await asyncMultiply(sumResult, 10);
};

// PANGGIL FUNCTION MAIN DAN MAIN2
main().then(() => {
  main2();
});
