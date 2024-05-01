// Array
// Penamaan array menggunakan kata plural atau banyak

const names = ["Miya", "Layla", "ALucard"];
console.log(names); // mencetak Array
console.log(names[0]); // Panggil value array menggunakan index

// Array dalam javascript bisa menampung beberapa tipe data
const values = ["Rafi Hadiyasa", 25, true, undefined, "Indonesia", "Jakarta"];
// Namun lebih baik, menggunakan array dengan value yang memiliki tipe data yang sama

// Menambahkan value dalam array
// Kita bisa menambahkan value dalam array, karena kita tidak mendeklarasikan jumlah data dalam array
names.push("Aurora");
console.log(names);

// Menghapus array
// parameter pertama dari splice menghapus data mulai dari index yang diberikan.
// parameter kedua dari splice memberitahu banyaknya jumlah data yang akan di hapus.
names.splice(2, 1); // artinya kita ingin menghapus index ke 2, sebanyak 1 data yaitu "Alucard"
console.log(names);

// Mengetahui panjang array dengan length
console.log(names.length);

// Silahkan explore method2 array yang lainnya

// Reassign nilai pada sebuah Array
names[2] = "Moskov"; // Mengganti Aurora dengan Moskov (Marksman)
console.log(names);
// Bisa juga melakukan reassign dengan null atau undefined.

