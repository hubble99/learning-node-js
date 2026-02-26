const getRandomint = (start, end) => Math.floor(Math.random() * (end - start + 1)) + start;

console.log("=====started===== (if/else)");

const min = 1;
const max = 10;
//generate random integer between min and max
const num = getRandomint(min, max);
const isOdd = num % 2 !== 0;
const isEven = !isOdd;

// dua kondisi if
console.log("2 kondisi if")
if (isOdd) {
    console.log(`${num} id odd: ${isOdd}`);
}

if (isEven) {
    console.log(`${num} is even: ${isEven}`);
}

// sintax if else
console.log("kondisi if else")
if (isOdd) {
    console.log(`${num} id odd: ${isOdd}`);
} else if(num % 10==0) {
    console.log(`${num}  is even and divisible by 10`)
} else {
    console.log(`${num} is even: ${isEven}`);
};

// sintax switch case
const day = 'senin'
switch (day) {
    case "senin":
        console.log("saatnya upacara")
        break
    case "selasa":
        console.log("saatnya belanja")
        break
    case "rabu":
        console.log("saatnya kucing-kucingan")
        break
    default:
        console.log("Main dihari ini")
        break
}

// one line code
let z = num < 3 ? "Berhasil" : "Gagal";
let v = num < 3 ? "Berhasil" : (num % 2 == 1 ? "Berhasil dengan syarat": "SUDAH GAGAL BROW");
console.log(`Apakah z berhasil: ${num} ternyata: ${z}`)
console.log(`Apakah v berhasil: ${num} ternyata: ${v}`)

console.log("======finished=======");