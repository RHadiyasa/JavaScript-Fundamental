// String -> tipe data teks, dengan menggunakan tanda  "", '', atau `` (backtick)
const firtName = "Rafi";
const lastName = 'Hadiyasa';

console.log("My name is " + firtName + " " + lastName);
console.log(firtName + ' says "Hello World"'); // Menggunakan '' untuk munculin "
console.log(firtName + ` say's "Hello World"`); // Menggunakan ` untuk munculin ' dan "

// Menggunakan \ escape untuk munculin semua jenis petik
console.log(firtName + ` say's "Hello World", dan munculin backtick\``); 
