// Conversion -> mengubah tipe data
let x = 5;
let y = "3";
let z = 3.14;


y = parseInt(y); // conversion dari string ke number bisa juga menggunakan Number(y)
console.log(x + y);
console.log("x adalah " + typeof x + " dan y adalah " + typeof y);

y = y.toString(); // conversion dari number ke string. bisa juga menggunakan String(y)
console.log(x + y);
console.log("x adalah " + typeof x + " dan y adalah " + typeof y);

z = parseFloat(z);
console.log("z = " + z)
console.log("z adalah " + typeof z)
