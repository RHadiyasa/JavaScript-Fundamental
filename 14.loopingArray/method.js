const heroes = ["Miya", "Layla", "Moskov", "Kimmy", "Clint"];

console.log("----- FOR BIASA -----");
for (let i = 0; i < heroes.length; i++) {
  const currentHero = heroes[i];

  if (currentHero.length <= 5) {
    console.log("Nama hero kurang dari 6 karakter : " + currentHero);
    break; // Bisa menggunakan break
  }
}

// MENGGUNAKAN FOREACH
// Lebih sering digunakan untuk mengakses array. Kecuali ada kebutuhan spesifik, baru menggunakan FOR biasa.
console.log("\n----- FOR EACH -----");
heroes.forEach((heroName, index) => {
  if (heroName.length <= 5) {
    console.log(
      `Nama hero kurang dari 6 karakter : ${heroName} Index ke-${index}`
    );
    // FOR EACH tidak bisa menggunakan break;
  }
});

// Menggunakan Array pada callback untuk menampilkan array secara keseluruhan (Jarang digunakan)
console.log("\n---------- MENGGUNAKAN ARRAY PADA CALLBACK ----------")
heroes.forEach((heroName, index, array) => {
  if (heroName.length <= 5) {
    console.log(
      `Nama hero kurang dari 6 karakter : ${heroName} Index ke-${index}`
    );
    console.log(array);
    // FOR EACH tidak bisa menggunakan break;
  }
});
