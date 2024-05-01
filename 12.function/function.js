// function adalah sebuah kumpulan kode, yang bisa kita gunakan berulang kali
// membuat function

function sayHello() {
  console.log("Hello World"); // code block
}

sayHello(); // memanggil function

// function bisa dipanggil berulang kali
sayHello();

function sayGoodBye() {
  console.log("Good Bye!");
}

sayGoodBye();

// parameter di dalam function
function greetFunction(username, age) {
  console.log(`Hello, ${username} | age ${age}`);
}

greetFunction("Rafi", 25);
greetFunction("Miya", 22);

let username = "Aurora";
let age = 20;
greetFunction(username, age);

// Validasi dalam function
function hero(name, damage) {
  // Validasi nama hero harus berbentuk string, dan damage harus number
  if (typeof name === "string" && typeof damage === "number") {
    console.log(`Nama Hero ${name}, damage ${damage}`);
  } else {
    console.log("Nama Hero harus string, dan damage harus Number");
  }
}

hero("Miya", 2000);
hero("Aurora", "2000");
hero("Layla");

// Default Value pada parameter function
function heroDetail(heroName, damageHero = 1000) {
  console.log(`Hero name ${heroName}, damage ${damageHero}`);
}

heroDetail("Moskov", 1200);
heroDetail("Alucard");
