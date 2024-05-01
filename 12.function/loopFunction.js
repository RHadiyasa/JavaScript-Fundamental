// looping di dalam function
function loopGreeting(numberOfLoop = 10) {
  // default loop sebanyak 10 kali
  for (let i = 1; i <= numberOfLoop; i++) {
    console.log("Halo ke-" + i);
  }
}

let jumlahLoop = 5;
loopGreeting(jumlahLoop);

