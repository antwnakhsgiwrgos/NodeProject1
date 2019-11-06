let chalk = require("chalk")

// let a = 69;
// let name = "mpeos";
// console.log("my name is " + name);
// console.log (a);
// console.log (155);
// console.log (20 + (-20));
// console.log (a + a * a);
// let b = 69;
// console.log(a + b);
// //if(a == b){
//    // console.log("to alpha kanei kati me to bita");
// //}
// if(a === b){
//     console.log("kati");
// }else if(a < b){
//     console.log("kati kalo");
// }else{
//     console.log("kati kako");
// }
// let anime ="good";
// switch(anime){
//     case"good":
//         console.log("anime is good ");
//         break;
//     case"bad":
//         console.log("anime is bad");
//         break;
//     default:
//         console.log("OK");
// }

// console.log (name.toUpperCase());

// console.log (name.toLowerCase());

// console.log(name.length);

// console.log(name[0]);


//--------------------------------------


// let myTable =[5,4,3,2];
// console.log(myTable);
// console.log(myTable[3]);
// console.log(myTable.length);


//-----------------------------------------


// let names =["champions:"];
// names.push("darius");
// names.push("yasuo");
// names.push("pyke");
// names.push("annie");
//
// console.log(names);
//
// for(let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }
// for(let x of names){
//     console.log(x);
//}

//names.splice(1,1); //διαγραφει ενα στοιχειο απο τον πινακα το πρωτο 1 ειναι απο πια θεση ξεκιναει και το δευτερο ειναι ποσα στοιχεια θα σβησει.


//----------------------------------------


// let languages =[
//     "HTML",
//     "CSS",
//     "JAVASCRIPT",
//     "C",
//     "C++",
// ]

// languages.pop(); //διαγραφει το τελευταιο στοιχειο του πινακα
// console.log(languages);
//
// languages.shift(); //διαγραφει το πρωτο στοιχειο του πινακα
// console.log(languages);
//
// languages.unshift("PYTHON"); //Προσθετει μια μεταβλητη στον πινακα στην αρχη
// console.log(languages);



// languages.forEach(long => { //     => αυτο το βελακι ειναι ιδιο με το αν εγραφα (fuction(long)) αντι για (long =>)
//     console.log("language: " +long);
// })



// ----------------------------------------

let personA = [
    "Dimos",
    "karadimonos",
    "dimos@gmail.com",
    "thessalonikh",
    "greece"
];

let personB = {
    name: "Dimos",
    surname: "Karadimos",
    email: "dimos@gmail.com",
    city: "thessalonikh",
    country: "greece"
};

//console.log(personB['email']); //{  same shit
//console.log(personB.email);    //{  same shit ο δευτερος τροπος αν εχει μεσα συμβολο δεν μπορω να τον χρησημοποιησω για ευνοητους λογος

console.log("to onoma moy einai " + chalk.bgBlue(personB['name']) +" "+ chalk.bgMagenta(personB['surname']) + " to email moy einai " + chalk.bgCyan(personB['email']) + " kai zw sthn " + chalk.bgGreen(personB['city']) + " pou einai sthn " + chalk.bgRed(personB['country']) );


//------------------------------------------


//console.log(chalk.blue("Hello World"))











