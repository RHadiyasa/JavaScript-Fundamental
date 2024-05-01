const heroes = [
  "Miya",
  "Layla",
  "Moskov",
  "Kimmy",
  "Clint",
  "Beatrix",
  "Lesley",
  "Irithel",
  "Brody",
  "Granger",
  "Nathan",
  "Roger",
  "Wanwan",
  "karrie",
  "Popol and Kupa",
  "Melissa",
  "Hanabi",
  "Edith",
  "Bruno",
];

const findHero = heroes.find((heroName) => {
  return heroName.length === 6;
});

console.log(findHero);

const findHero2 = heroes.filter((heroName) => {
  return heroName.length <= 5;
});

console.log(findHero2);

// Function filter membuat array baru, sehingga kita juga bisa melakukan hal seperti berikut
console.log(
  heroes.filter((heroes) => {
    return heroes.length > 6;
  })
);

console.log(heroes); // Array aslinya tidak hilang (tidak digantikan oleh filter)

// CARA KERJA MANUAL
console.log("\n--------- CARA KERJA MANUAL ---------");

const filteredHeroes = []; // Inisiasi Array kosong untuk menampung heroes yang akan difilter

for (let i = 0; i < heroes.length; i++) {
  const currentHero = heroes[i];
  if (currentHero.length > 6) {
    // Memasukkan heroes yang sesuai dengan kondisi ke dalam array kosong milik filteredHeroes
    filteredHeroes.push(currentHero); 
  }
}

console.log(filteredHeroes);
