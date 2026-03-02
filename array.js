// Array adalah kumpulan nilai yang disimpan dalam satu variabel
console.log("Array adalah kumpulan nilai yang disimpan dalam satu variabel");
const bilangan = [1, 2, 3, 4, 5];
console.log(bilangan);

const nama = ["Budi", "Andi", "Citra", "Dewi"];
console.log(nama);

// Array bisa menyimpan tipe data yang berbeda
const campuran = [1, "Budi", true, null, undefined];
console.log(campuran);

// Array bisa menyimpan array lain (nested array)
const nestedArray = [1, 2, [3, 4, 5], 6, 7, [8, 9, 10]];
console.log(nestedArray);

// Cara memanggil index array
console.log("Cara memanggil index array");
console.log(nama)
console.log(nama[0]); // Budi
console.log(nama[1]); // Andi
console.log(nama[2]); // Citra
console.log(nama[3]); // Dewi
console.log(nama[4]); // undefined

// Cara memanggil nested array
console.log("Cara memanggil nested array");
console.log(nestedArray)
console.log(nestedArray[2]); // [3, 4, 5]
console.log(nestedArray[2][0]); // 3
console.log(nestedArray[2][1]); // 4
console.log(nestedArray[2][2]); // 5
console.log(nestedArray[5][0]); // 8
console.log(nestedArray[5][1]); // 9
console.log(nestedArray[5][2]); // 10

// Slicing array
// Slicing array adalah mengambil sebagian elemen array
console.log("Slicing array");
console.log(nama)
console.log(nama.slice(0, 2)); // ["Budi", "Andi"]
console.log(nama.slice(2, 4)); // ["Citra", "Dewi"]
console.log(nama.slice(2)); // ["Citra", "Dewi"]
console.log(nama.slice()); // ["Budi", "Andi", "Citra", "Dewi"]
// argumen pertama adalah index awal, argumen kedua adalah index akhir (tidak termasuk index akhir)

// Splice array
// Splice array adalah mengubah array dengan menambahkan atau menghapus elemen
console.log("Splice array");
console.log(nama)
console.log(nama.splice(0, 2)); // ["Budi", "Andi"]
console.log(nama); // ["Citra", "Dewi"]

// Spread operator
// Spread operator adalah operator yang digunakan untuk menyebarkan elemen array
console.log("Spread operator");
console.log(nama)
const spreadArray = [...nama];
console.log(spreadArray); // ["Budi", "Andi", "Citra", "Dewi"]

// Destructuring array  
// Destructuring array adalah operator yang digunakan untuk memecah array menjadi variabel
console.log("Destructuring array");
console.log(nama)
const [nama1, nama2, nama3, nama4] = nama;
console.log(nama1); // Budi
console.log(nama2); // Andi
console.log(nama3); // Citra
console.log(nama4); // Dewi

// Menaambahkan elemen array di akhir
console.log("Menaambahkan elemen array");
console.log(nama)
nama.push("Eka");
console.log(nama); // ["Budi", "Andi", "Citra", "Dewi", "Eka"]

// Menghapus elemen array di akhir
console.log("Menghapus elemen array");  
console.log(nama)
nama.pop();
console.log(nama); // ["Budi", "Andi", "Citra", "Dewi"]

// Menambahkan elemen array di awal
console.log("Menambahkan elemen array");
console.log(nama)
nama.unshift("Eka");
console.log(nama); // ["Eka", "Budi", "Andi", "Citra", "Dewi"]

// Menghapus elemen array di awal
console.log("Menghapus elemen array");
console.log(nama)
nama.shift();
console.log(nama); // ["Budi", "Andi", "Citra", "Dewi"]

// Mengurutkan array
console.log("Mengurutkan array");
nama.sort();
console.log(nama); // ["Andi", "Budi", "Citra", "Dewi"]

// Perulangan array
console.log("Perulangan array");
console.log(nama)
for (let i = 0; i < nama.length; i++) {
    console.log("Nama ke ",i+1,"adalah",nama[i]);
}
