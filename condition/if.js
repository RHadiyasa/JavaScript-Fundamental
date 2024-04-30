const grade = 4;
const gradeA = 8.5;
const gradeB = 7;
const gradeC = 6;
const gradeD = 5;

// Jika ingin membandingkan lebih baik menggunakan === 
// untuk memastikan tipe data yang dibandingkan adalah sama
if (grade >= gradeA) {
  console.log("Nilai Anda : " + grade + " | A");
} else if (grade >= gradeB) {
  console.log("Nilai Anda : " + grade + " | B");
} else if (grade >= gradeC) {
  console.log("Nilai Anda : " + grade + " | C");
} else if (grade >= gradeD) {
  console.log("Nilai Anda : " + grade + " | D");
} else {
  console.log("Salah Jurusan");
}
