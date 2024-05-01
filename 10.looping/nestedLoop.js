let star = ""; // deklarasi string kosong

console.log("Segitiga : ")
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    star += "* "; // menambahkan string dengan karakter bintang menggunakan loop
  }
  console.log(star); // cetak bintang
  star = ""; // reset column setelahnya
}

console.log("\n");

console.log("Kotak : ")
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    star += "* "; // menambahkan string dengan karakter bintang menggunakan loop
  }
  console.log(star); // cetak bintang
  star = ""; // reset column setelahnya
}
