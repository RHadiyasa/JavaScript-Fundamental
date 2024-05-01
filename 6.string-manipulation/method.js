const username = "dinda";
const firstLetter = username.charAt(0); // index dimulai dari 0
console.log(firstLetter);
console.log(username.toUpperCase()); // method harus menggunakan tanda kurung ()

//Slice untuk mengambil potongan string dimulai dari index yang ditentukan
console.log(firstLetter.toUpperCase() + username.slice(firstLetter.length))