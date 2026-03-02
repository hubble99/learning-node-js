/**
 * PENJELASAN LENGKAP MENGENAI FUNCTION DI JAVASCRIPT
 * 
 * Function (Fungsi) adalah blok kode yang dirancang untuk melakukan tugas tertentu.
 * Function akan dieksekusi ketika "dipanggil" (invoked / called).
 * Ini sangat berguna untuk mencegah pengulangan kode (DRY - Don't Repeat Yourself).
 */

// ============================================================================
// 1. FUNCTION DECLARATION (Deklarasi Fungsi Biasa)
// ============================================================================
// Ini adalah cara paling umum untuk membuat fungsi.
// Fungsi ini memiliki sifat "Hoisting", artinya bisa dipanggil sebelum dideklarasikan di dalam file.

function sapa(nama) {
    return `Halo, ${nama}! Selamat datang.`;
}

console.log("1. Function Declaration:");
console.log(sapa("Budi"));

function bilanganGenap(angka){
    if (angka%2==0){
        return `${angka} adalah bilangan genap`
    } else {
        return `${angka} adalah bilangan ganjil`
    }
}

console.log(bilanganGenap(2));
console.log(bilanganGenap(3));

// ============================================================================
// 2. FUNCTION EXPRESSION (Fungsi sebagai Ekspresi)
// ============================================================================
// Fungsi disimpan ke dalam sebuah variabel.
// Fungsi ini TIDAK terkena hoisting, jadi harus dideklarasikan dulu sebelum dipanggil.

const hitungLuasPersegi = function (sisi) {
    return sisi * sisi;
};

console.log("\n2. Function Expression:");
console.log(`Luas persegi dengan sisi 5 adalah ${hitungLuasPersegi(5)}`);


// ============================================================================
// 3. ARROW FUNCTION (Fungsi Panah) - ES6+
// ============================================================================
// Cara yang lebih singkat untuk menulis function expression.
// Sangat sering digunakan di JavaScript modern (React, Vue, Node.js).

// Versi standar
const tambah = (a, b) => {
    return a + b;
};

// Versi satu baris (implied return - tidak perlu kata 'return' dan kurung kurawal)
const kali = (a, b) => a * b;

// Versi satu parameter (tidak perlu tanda kurung di parameter)
const kuadrat = angka => angka * angka;

// arrow function rumit
const cekBilanganAsli = (angka) => {
    if (angka>0){
        return `${angka} adalah bilangan asli`
    } else {
        return `${angka} adalah bukan bilangan asli`
    }
}
console.log("\n3. Arrow Function:");
console.log(`Penjumlahan 3 + 4 = ${tambah(3, 4)}`);
console.log(`Perkalian 3 * 4 = ${kali(3, 4)}`);
console.log(`Kuadrat dari 5 = ${kuadrat(5)}`);
console.log(cekBilanganAsli(5));
console.log(cekBilanganAsli(-5));


// ============================================================================
// 4. PARAMETER & ARGUMEN LANJUTAN
// ============================================================================

// A. Default Parameter (Nilai bawaan jika argumen tidak diberikan)
function sapaDenganWaktu(nama = "Tamu", waktu = "Pagi") {
    return `Selamat ${waktu}, ${nama}!`;
}

console.log("\n4A. Default Parameter:");
console.log(sapaDenganWaktu()); // Output: Selamat Pagi, Tamu!
console.log(sapaDenganWaktu("Andi", "Malam")); // Output: Selamat Malam, Andi!

// B. Rest Parameter (Menerima banyak argumen menjadi sebuah array)
function jumlahkanSemua(...angka) {
    let total = 0;
    for (let num of angka) {
        total += num;
    }
    return total;
}

console.log("\n4B. Rest Parameter:");
console.log(`Total 1+2+3+4+5 = ${jumlahkanSemua(1, 2, 3, 4, 5)}`);


// ============================================================================
// 5. CALLBACK FUNCTION
// ============================================================================
// Fungsi yang dilempar/dipassing sebagai argumen ke dalam fungsi lain.

function prosesData(data, callback) {
    console.log(`\n5. Callback Function:`);
    console.log(`Memproses data: ${data}...`);
    // Mengeksekusi fungsi callback setelah proses selesai
    callback();
}

function dataSelesai() {
    console.log("Proses data telah selesai!");
}

// Memanggil prosesData dan memasukkan fungsi dataSelesai sebagai argumen
prosesData("Data Karyawan", dataSelesai);


// ============================================================================
// 6. IIFE (Immediately Invoked Function Expression)
// ============================================================================
// Fungsi yang langsung dijalankan sesaat setelah dideklarasikan.
// Berguna untuk menghindari polusi variabel global (variabel tidak bisa diakses dari luar).

console.log("\n6. IIFE:");
(function () {
    const pesanRahasia = "Ini adalah pesan rahasia di dalam IIFE";
    console.log(pesanRahasia);
})();
// console.log(pesanRahasia); // Ini akan error karena variabel hanya ada di dalam IIFE


// ============================================================================
// 7. SCOPE (Ruang Lingkup)
// ============================================================================
const variabelGlobal = "Saya Global";

function tesScope() {
    const variabelLokal = "Saya Lokal";
    console.log("\n7. Scope:");
    console.log("Di dalam fungsi bisa akses global: " + variabelGlobal);
    console.log("Di dalam fungsi bisa akses lokal: " + variabelLokal);
}

tesScope();
// console.log(variabelLokal); // Error: variabelLokal is not defined (tidak bisa diakses dari luar fungsi)

const PI = 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632788659361533818279682303019520353018529689957736225994138912497217752834791315155748572424541506959508295331168617278558890750983817546374649393192550604009277016711390098488240128583616035637076601047101819429555961989467678374494482553797747268471040475346462080466842590694912933136770289891521047521620569660240580381501935112533824300355876402474964732639141992726042699227967823547816360093417216412199245863150302861829745557067498385054945885869269956909272107975093029553211653449872027559602364806654991198818347977535663698074265425278625518184175746728909777727938000816470600161452491921732172147723501414419735685481613611573525521334757418494684385233239073941433345477624168625189835694855620992192221842725502542568876717904;
function luasLingkaran(r){
    Luas = PI * r**2;
    return Luas;
}
const jari_jari = 90;
console.log(`Luas lingkaran dengan jari-jari ${jari_jari} adalah ${luasLingkaran(jari_jari)}`);

// ============================================================================
// 8. Function as First Class Citizen
// ============================================================================
// Function bisa dianggap sebagai variabel biasa

function sapa(nama) {
    return `Halo, ${nama}! Selamat datang.`;
}

const sapaan = sapa; // Function disimpan ke dalam variabel
console.log("\n8. Function as First Class Citizen:");
console.log(sapaan("Budi")); // Dipanggil melalui variabel

// Function bisa dikembalikan dari function lain (return function)
function buatSapaan(waktu) {
    return function (nama) {
        return `Selamat ${waktu}, ${nama}!`;
    };
}

const sapaPagi = buatSapaan("Pagi");
const sapaMalam = buatSapaan("Malam");

console.log(sapaPagi("Andi"));
console.log(sapaMalam("Budi"));
