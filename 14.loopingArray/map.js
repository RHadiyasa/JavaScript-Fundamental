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
  "Karrie",
  "Popol and Kupa",
  "Melissa",
  "Hanabi",
  "Edith",
  "Bruno",
];
// Method Map
// Map bersifat mirip dengan filter. Mirip banget.
// Map akan return sebuah array baru.

// Apapun yang direturn oleh callback function akan masuk ke dalam array baru .map

const numbers = ["1", "30", "25", "14", "28", "18"];
console.log(numbers); // Sebelum di parsing

const covertedNumbers = numbers.map((value) => {
  return parseInt(value);
});

console.log(covertedNumbers); // Sesudah diparsing

const mappedHeroes = heroes.map((heroName) => {
  if (heroName.length < 7) {
    if(heroName.charAt(0) === "M"){
        return "HERO KEREN";
    }
    return heroName.charAt(0);
  }
});

console.log(mappedHeroes);
