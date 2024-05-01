// Menggunakan callback

const calculate = (x, y, callback) => {
  // x = 5 dan y = 4 | callback = sum
  callback(x, y); // x jadi 5, dan y jadi 4
};

const sum = (a, b) => {
  // a menerima 5, b menerima 4
  console.log(a + b); // penjumlahan a dan b || penjumlahan 5 + 4
};

calculate(5, 4, sum);

// MENGGUNAKAN RETURN
const calculate2 = (x, y, callback) => {
  // APAPUN YANG DIRETURN OLEH CALLBACK AKAN DI RETURN OLEH CALCULATE2
  return callback(x, y); // RETURN 8
};

const sum2 = (a, b) => a + b; // SUM RETURN 8

console.log(calculate2(5, 4, sum2));

// CONTOH LAIN MENGGUNAKAN STRING
const upperName = (x, callback) => {
  return callback(x);
};

const upperString = (text = "") => text.toUpperCase(); // text default valuenya string kosong
const getFirstLetter = (text = "") => text.charAt(0).toUpperCase();

console.log(upperName("rafi hadiyasa", upperString));
console.log(upperName("rafi hadiyasa", getFirstLetter));
