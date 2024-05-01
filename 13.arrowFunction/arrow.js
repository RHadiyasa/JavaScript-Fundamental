// Arrow function memiliki konsep yang sama dengan function biasa (bisa dipanggil berulang)
// Pembuatan arrow function

// arrow function juga bisa ditambahkan default value
const jumlah = (a = 1, b = 2) => {
  return a + b;
};

console.log("Dengan menentukan value = " + jumlah(3, 4));
console.log("Menggunakan default value = " + jumlah());

// console.log(perkalian(2, 3)); // TIDAK BISA DIPANGGIl  

// arrow function bersifat ramping
const perkalian = (a, b) => a * b; // imidiate return
console.log(perkalian(3, 2));

// Arrow function memiliki sifat seperti variable. Sehingga harus dideklarasikan dahulu baru bisa dipanggil
// Sedangkan function biasa, dijalankan terlebih dahulu oleh javascript

console.log(add(3, 5)); // panggil function add

function add(a, b) {
  // bisa dipanggil di atas.
  return a + b;
}
