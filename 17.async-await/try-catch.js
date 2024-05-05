function createID(age = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age < 17) {
        reject("Belum cukup umur...");
      } else {
        resolve("Selamat! KTP berhasil dibuat.");
      }
    }, 2000);
  });
}

const main = async () => {
  try {
    const age = 12;

    if (age < 10) {
      throw new Error("Terlalu kecil, sekolah dulu dek...");
    }

    const result = await createID(age);

    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Process is done...")
  }
};

main();
