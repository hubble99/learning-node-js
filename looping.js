const getRandomint = (start, end) => Math.floor(Math.random() * (end - start + 1)) + start;
// sintaks while

console.log("=====started===== (while)");
let n = 0;
while (n < 5) {
    console.log(`n = ${n}`);
    n++;
}
console.log("=====finished===== (while)");

// sintaks do while

console.log("=====started===== (do while)");
let m = 0;
do {
    console.log(`m = ${m}`);
    m++;
} while (m < 5);
console.log("=====finished===== (do while)");

// === PERBEDAAN while dan do...while ===
console.log("\n===== PERBEDAAN while dan do...while =====");
// Kondisi awal sudah bernilai salah (false) sejak awal (karena 10 tidak kurang dari 5)
let varWhile = 10;
console.log("--- Contoh while (kondisi awal false) ---");
while (varWhile < 5) {
    console.log(`while: varWhile = ${varWhile} (Baris ini TIDAK AKAN dieksekusi karena kondisi sudah false)`);
    varWhile++;
}

let varDoWhile = 10;
console.log("\n--- Contoh do...while (kondisi awal false) ---");
do {
    console.log(`do...while: varDoWhile = ${varDoWhile} (Baris ini TETAP dieksekusi minimal 1 kali, baru setelah itu mengecek kondisi dan berhenti)`);
    varDoWhile++;
} while (varDoWhile < 5);
console.log("==========================================\n");

// sintaks for

console.log("=====started===== (for)");
for (let i = 0; i < 5; i++) {
    console.log(`i = ${i}`);
}
console.log("=====finished===== (for)");

// sintaks for...of

console.log("=====started===== (for...of)");
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(`num = ${num}`);
}
console.log("=====finished===== (for...of)");

// sintaks for...in

console.log("=====started===== (for...in)");
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    console.log(`key = ${key}`);
}
console.log("=====finished===== (for...in)");
