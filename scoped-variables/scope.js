/*
Bedanya let dengan var adalah
1. let -> ketika kita mendeklarasikan variable yang sama dengan let dia akan error
2. var -> kita bisa membuat nama variable yang sama dengan var (berpotensi bikin bingung)
3. const -> variable konstan yang tidak mengizinkan kita untuk mengubah nilai/valuenya
 */

let myLunch = "Ayam Goreng";
console.log(myLunch)
myLunch = "Sop Buntut";
console.log(myLunch)

const myName = "Rafi Hadiyasa";
console.log(myName);
// myName = "Adinda";
// console.log(myName);