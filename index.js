// TODO: Buatlah data dari kedua user di sini

// Tentukan tipe data dan struktur data yang menurut kalian tepat
// name
const arrName = [];
arrName[0] = "Monica";
arrName.push("Wendy");

// gender
const arrGender = [];
arrGender[0] = "Female";
arrGender.push("Male");

// age
const arrAge = [];
arrAge[0] = 17;
arrAge.push(23);

// email
const arrEmail = [];
arrEmail[0] = "monica@dingdong.com";
arrEmail.push("wendy@dingdong.com");

// favoriteColor
// Warna kesukaan tidak boleh duplikat
const arrcolMonica = [
    "Yellow",
    "Pink",
    "White",
    "Purple",
];
const arrColWendy = [
    "Blue",
    "Black",
    "Grey",
];

let setColMonica = new Set(arrcolMonica);
let setColWendy = new Set(arrColWendy);

// isHavePet
const arrPet = [];
arrPet[0] = "Yes";
arrPet.push("No");

// education
const Edu1 = {
    name: "SD 01",
    city: "Jakarta",
    graduate: 2016
};

const Edu2 = new Object(); {
    Edu2.name = "SD 02";
    Edu2.city = "Jakarta";
    Edu2.graduate = 2010;
};

// favoriteRestaurant
// Restoran tidak boleh duplikat
const arrResMonica = [
    "Bento",
    "Sushi",
    "Pancake",
    "Eggy",
    "Tempura",
    "Bento",
    "Eggy",
    "Padang",
    "Tteok",
    "Sushi",
    "Sushi",
];
const arrResWendy = [
    "Tempura",
    "Bento",
    "Sushi",
    "Pancake",
    "Padang",
    "Katsu",
    "Geprek",
    "Pancake",
    "Eggy",
];

let setResMonica = new Set(arrResMonica);
let setResWendy = new Set(arrResWendy);

// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    name: arrName[0],
    gender: arrGender[0],
    age: arrAge[0],
    email: arrEmail[0],
    favoriteColor: [...setColMonica],
    isHavePet: "Yes",
    education: Edu1,
    favoriteRestaurant: [...setColWendy],
};

const secondUser = {
    name: arrName[1],
    gender: arrGender[1],
    age: arrAge[1],
    email: arrEmail[1],
    favoriteColor: [...setColWendy],
    isHavePet: "No",
    education: Edu2,
    favoriteRestaurant: [...setResWendy],
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};