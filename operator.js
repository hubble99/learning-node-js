console.log("=== Comparison Operators ===")

let x = 10;
let y = 20;
let z = '10';
console.log("x == y adalah", x == y);
console.log("x != y adalah", x != y);
console.log("x == z adalah", x == z); // akan true karena tidak strick tipe data dan nilainya sama
console.log("x === z adalah", x === z); // akan false karena strick tipe data
console.log("x > y adalah", x > y);
console.log("x < y adalah", x < y);
console.log("x >= y adalah", x >= y);
console.log("x <= y adalah", x <= y);
console.log("x <= z adalah", x <= z); // akan true karena tidak strick tipe data dan ada tanda sama disana

let string_a = "ABCD";
let string_b = "ADCD";
console.log("string_a == string_b adalah", string_a == string_b);


console.log("=== Math Operators ===")
let a = 6;
let b = 4;
console.log("a + b adalah", a + b); //Penjumlahan
console.log("a - b adalah", a - b); //Pengurangan
console.log("a * b adalah", a * b); //Perkalian
console.log("a / b adalah", a / b); //Pembagian
console.log("a % b adalah", a % b); //Modulus (hanya berlaku untuk bilangan bulat)
console.log("a ** b adalah", a ** b); //Pangkat
console.log("a++ adalah", a++); //Nilai a dulu baru dijumlahkan sehingga hasilnya tetap a Increment (menambahkan 1)
console.log("b-- adalah", b--); //Nilai b dulu baru dikurangi sehingga hasilnya tetap b Decrement (mengurangi 1)
console.log("++a adalah", ++a); //Nilai a dijumlahkan dulu baru ditampilkan sehingga hasilnya a+1 Increment (menambahkan 1)
console.log("--b adalah", --b); //Nilai b dikurangi dulu baru ditampilkan sehingga hasilnya b-1 Decrement (mengurangi 1)


console.log("=== Logical Operators ===")
let c = true;
let d = false;
console.log("c && d adalah", c && d); //akan false karena keduanya tidak true
console.log("c || d adalah", c || d); //akan true karena salah satunya true
console.log("!c adalah", !c); //logika negasi
console.log("!d adalah", !d); //logika negasi

