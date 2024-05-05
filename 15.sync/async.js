// Javascript memiliki Asynchronous.
// jika synchronous adalah menunggu sebuah proses selesai untuk ke proses selanjutnya
// maka Asynchronous dapat melakukan eksekusi code, meskipun proses eksekusi code di atasnya belum selesai.
// ini bermanfaat ketika poses loading website, sehingga user tidak perlu menunggu untuk melihat tampilan yang lebih cepat di proses oleh server.

function asyncOne() {
  setTimeout(() => {
    console.log("Function One is Done");
  }, 1000);
}

// Ketika setTimeout dipanggil, maka code akan menunggu sesuai dengan interval waktu yang sudah kita tentukan untuk mengeksekusi kode

function asyncTwo(){
    setTimeout(()=> {
        console.log("Function Two is Done");
    }, 3000)
}

function asyncThree(){
    setTimeout(()=> {
        console.log("Function Three is Done");
    }, 2000)
}

asyncThree();
asyncTwo(); 
asyncOne(); // function one akan keluar duluan karena intervalnya lebih cepat dari asyncTwo