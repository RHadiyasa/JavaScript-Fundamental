// Callback function adalah cara penggunaan function sebagai parameter

const processor = (callback) => { // function processor menerima paramter bernama "callback"
  callback(); // execute function callback
};

const greeting = () => { // arrow function biasa
  console.log("Hello");
};

processor(greeting); // greeting menjadi parameter
// sama aja kaya memanggil function greeting menggunakan function processor.

const goodBye = () => {
    console.log("Good Bye!")
}

processor(goodBye);
