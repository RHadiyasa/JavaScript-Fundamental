let i = 1;

// Mirip dengan IF selama kondisi true maka kode akan terus dijalankan.
// While
while (i < 10) {
  if (i === 4) {
    i++; // harus ditambahkan karena i tidak akan bertambah, karena program akan skip i++ yang ada di bawah.
    continue;
  }
  console.log("Masuk While ke-" + i);
  i++;
}
