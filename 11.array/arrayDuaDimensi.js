// Array 2 Dimensi (array di dalam array)

const twoDimension = [
  [1, 2, 3], // Index ke 0 -> punya index lagi 
  [4, 5, 6], // Index ke 1 -> punya index lagi
  [7, 8, 9], // Index ke 2 -> punya index lagi
];

console.log(twoDimension);
console.log("Array index ke 1 = " + twoDimension[1]); // Mengambil array index ke 1
console.log(twoDimension[1][0]); // Mengambil array index ke 0, di dalam array index ke 1