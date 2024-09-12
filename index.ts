//@ts-ignore


// type alias 

// type User = {
//   firstName : string;
//   lastName : string;
//   age : 25;
//   address? : string;
// }


// function login(userData: User): User{
//   return userData;
// }

// const user = {
//   firstName : 'Tanvir',
//   lastName : 'Ahmed',
//   age : 25
// }

// console.log(login(user))




// Interfaces
// interface holo kono object er shape 

// interface Transaction {
//   payerAccountNumber: number;
//   payeeAccountNumber: number;
// }

// interface BankAccount {
//   accountNumber: number;
//   accountHolder: string;
//   balance: number;
//   isActive: boolean;
//   transactions: Transaction[];
// }

// const transaction1: Transaction = {
//   payerAccountNumber: 112,
//   payeeAccountNumber: 234,
// }
// const transaction2: Transaction = {
//   payerAccountNumber: 112,
//   payeeAccountNumber: 234,
// }

// const bankAccount: BankAccount = {
//   accountNumber: 123,
//   accountHolder: 'Tanvir Ahmed',
//   balance: 13500,
//   isActive: true,
//   transactions: [transaction1,transaction2]
// }



// Example 2 : 

// interface User {
//   firstName : string;
//   lastName : string;
//   age : number; 
//   isActive : boolean;
//   address? : string;
// }

// const user1: User = {
//   firstName : 'Tanvir',
//   lastName : 'Ahmed',
//   age : 25,
//   isActive : true,
//   address : 'Dhaka'
// }
// const user2: User = {
//   firstName : 'Mustak',
//   lastName : 'Ahmed',
//   age : 16,
//   isActive : false,
// }

// console.log(user2)


// Extend interface

// interface Book {
//   name : string;
//   price : number;
// }

// interface EBook extends Book {
//   // name: string;
//   // price: number;
//   fileSize: number;
//   format: string;
// }

// interface AudioBook extends EBook {
//   // name: string;
//   // price: number;
//   // fileSize: number;
//   // format: string;
//   duration: number;
// }

// const book: AudioBook = {
//   name: 'Tanvir Ahmed',
//   price: 2400,
//   fileSize: 300,
//   format: 'pdf',
//   duration: 4,
// }


// Merge Interface


// interface Book {
//   name : string;
//   price : number;
// }
// interface Book {
//   size : number;
// }

// const book: Book = {
//   name : 'Tanvir Ahmed',
//   price : 1200,
//   size : 45,
// }

// console.log(book)


// kintu type er sathe merge hoy na 

// type Book = {
//   name: string;
//   price: number;
// }
// type Book = {
//   size: number;
// }

// *** Important Notes ********
// interface only non-premitive(object) er jonno use hoy . primitive er jonno only type use korte hobe

// type SanitizedString = string;
// type EvenNumber = number;



// Unions

// type ID = number | string; // this is union

// function printId(id: ID){
//   if(typeof id === 'string'){
//     console.log(id.toUpperCase());
//   }else{
//     console.log(id)
//   }
// }

// printId('2')

// Example 2: 

// function getFirstThree(x: string | number[]){
//   return x.slice(0,3);
// }

// console.log(getFirstThree('Hello'))


// Generics

// function logString(arg: string){
//   console.log(arg);
//   return arg;
// }

// function logNumber(arg: number){
//   console.log(arg)
//   return arg
// }

// function logArray(arg: any[]){
//   console.log(arg)
//   return arg
// }

// function logAnything(arg: any){
//   console.log(arg)
//   return arg
// }

// logString('Logged In');
// logNumber(123)
// logArray([2,'Hello',true,3])

