let city ="Bandung";
let province ="Jawa Barat";
let no = 131;
let status = true;

let address = city + " , " + province;

console.log(address);

//=================================

let age = 25;
let birthDay = age + 1;

console.log(birthDay);

//================================ 
let Status = 'jomblo';
if (Status === 'jomblo')
    console.log('banyak duit');

//==============================

let mySum = function(x,y,z){
    return x+y+z;
}

console.log(mySum(1,2,3));

//=================================

let getScore = function ( name = 'Dandi', age = '22'){
    return `${name} Score ${age}`;
}
console.log(getScore('Wibowo', 17));

//====================================
let myBooks = {
    title : 'How do I get your love ?',
    author : 'Dandi Wibowo',
    pageCount : 1001,
}

myBooks.title = 'No one way found';

console.log(`
    Judul buku : ${myBooks.title}
    Author : ${myBooks.author}
`);

let getBook = function(book){
    console.log(` Judul buku : ${book.title}`);
}

getBook(myBooks);


let myAccount = {
    name : 'Dandi wibowo',
    expense : 0,
    income : 0,
}

let addExpanse = function (account,amount){
    let result = account.expense + amount;
    console.log(result);
}

//addExpanse(myAccount,500);
//console.log(`${addExpanse(myAccount,500)}`);

let pasword = 'random123';
console.log(pasword.includes('password'));

//=========================================
let emptyArray = [];
let nage =[21,'naaann',true,55];
console.log(nage[1]);

let numList =[1];
numList.push(17);
numList.unshift(3);
numList.splice(1,0,99) // array ke berapa , jumlah array yg dihapus, nilai yg akan dimasukkan
console.log(numList);

//===========================

let activities =['Tidur', 'Bangun', 'Makan'];
//find .forEach
let myindex = activities.findIndex['Bangun'];
console.log(myindex);