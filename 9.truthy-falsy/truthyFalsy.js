const condition = true; // Boolean murni
const conditionNumber = 0 > 3; // false

// truthy falsy -> ketika sebuah value itu memiliki value mendekati true / false
// string -> jika string kosong, maka hasilnya falsy
// number -> jika number 0, hasilnya adalah falsy

// bisa dicoba dengan mengkonversi menjadi boolean.
const age = 25;
const username = "rhadiyasa";

if (age) {
  console.log("Masuk IF");
  console.log(Boolean(age));
}

if (username) {
  console.log("Hello, welcome " + username);
} else {
  console.log("Please input a username...");
}
