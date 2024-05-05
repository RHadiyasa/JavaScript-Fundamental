function createID(age = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age < 17) {
        reject("Belum cukup umur");
      } else {
        resolve("KTP berhasil dibuat");
      }
    }, 3000);
  });
}

// Resolve akan mengeksekusi .then, sedangkan reject akan mengeksekusi .catch
createID(18)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    // jangan ditambahkan .catch dulu biar errornya keluar.
    console.log(err);
  })
  .finally(() => { // tidak ada parameternya, finally pasti di eksekusi apapun hasilnya
    console.log("Checking process is done...");
  });
