// Secara default, function tidak memiliki value dan akan keluar undefined ketika di cetak
function sayHello() {
  console.log("Hello World");
}
console.log(sayHello());

// untuk bisa membuat function memiliki value, kita bisa memeberikan return keyword.
function penjumlahan(a, b) {
  return a + b;
}

function pengurangan(a, b) {
  return a - b;
}

console.log(penjumlahan(3, 4));
console.log(penjumlahan(3, 4) * pengurangan(10, 5)); // 7 * 5 = 35
