// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL
let angka = 1
let counter = 100
while(angka <= counter){
    if(angka % 2 == 0){
        console.log(`angka ${angka} = GENAP`)
    }else{
        console.log(`angka ${angka} = GANJIL`)
    }
    angka++
}