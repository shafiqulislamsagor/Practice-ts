"use strict";
// console.log('Starting')
// const country = "I live in Sherpur"
// console.log(country)
// let playerName  = "masrafi";
// console.log(playerName)
// playerName = 34 ;
// console.log(playerName)
// let playerName ;
// playerName = "masrafi";
// playerName = 21 ;
// playerName = true ;
// console.log(playerName)
// function multiply(a : number,b : any){
//     return a * b;
// }
// console.log(multiply(2,3))
// let fruits = ['apple', 'orange', 'banana' ]
// fruits.push('sagor')
// console.log(fruits)
// let person = {
//     name : "Masrafi",
//     age: 34,
//     inCaptain: true
// }
// person.age = 30
// person.country = "bangladesh"  error message
// console.log(person)
// let a:string
// let b:number
// a = 'sagor'
// b = 34
// console.log(a , b)
// string/number/boolean array
// let a:string[] = []
// a.push('apple')
// a.push(5700) error message
// string and number array
// let a:(string | number)[] = []
// a.push('sagor',54 , 74 , 'apple') 
// object 
// let c : {name:string , age:number , country:string , home: string} 
// c = {
//     name:'sagor',
//     age: 34,
//     inCaptain: true
// } error massage 
// c = {
//     name:'sagor',
//     age: 34,
//     country: 'bangladesh',
//     home: 'dhaka'
// }
// let a: any ;
// a = 2 
// a = 'sagor'
// console.log(a)
// let b : {
//     name:any,
//     age:any
// }
// b = {
//     name: 'sagor',
//     age: 34
// }
// const myFunction = () =>{
//     console.log('Hello World')
// }
// let myFunction:Function;
// myFunction = () => {
//     console.log('Hello World')
// }
// const myFunction:Function = () =>{
//     console.log('first function')
// }
// const myFun = (a:string , b:string , c?:string = 'sagor') =>{
//     console.log(`hello ${a} + ${b}`)
// }  defult values allready defined errors is c?:string
// const myFun = (a:string , b:string , c:string = 'sagor') : string =>{
//     // console.log(`hello ${a} + ${b}`)
//     const  value = `hello ${a} + ${b}`
//     return value
// }
// console.log(myFun('sagor','hasan'))
// myFun('sagor' , 21) error massage
// type stringOrNumber = string | number
// type user = {
//     name:string , 
//     age:number
// } 
// const userDetails = (
//     id: string | number , 
//     user : user
// ) : any =>{
//     console.log(`User id is ${id} , name is ${user.name} , age is ${user.age}`)
// }
// const sayHello = (user:user):any =>{
//     console.log(`Hello ${user.age > 50 ? 'sir':'Mr'} ${user.name}`)
// }
// userDetails('123', {name:'sagor', age:34})
// sayHello({name:'sagor', age:34})
// let a :string ;
// a = 'sagor'
// let myFun: (x:string , y:string) => void;
// let add: (x:number, y:number) => Number // function signatures
// add = (a:number , b:number) =>{
//     return a + b
// }
// let calculations : (x:number , y:number , z:string) => number;
// calculations = (a:number ,b:number , c:string) =>{
//   if(c === 'add'){
//     return a + b
//   }
//   else{
//     return a - b
//   }
// }
// console.log(calculations(2 , 5 , 'add'))
// console.log(calculations(2 , 5 , 'minus'))
// type numberOrString = number | string ;
// type userDatail = {name: string, age: number}
// let userDetails: (id:numberOrString , userInfo:userDatail) => void;
// userDetails = (idx: numberOrString , userDetailsInfo:userDatail) =>{
//     return `${userDetailsInfo.name} ${idx}`
// }
// console.log(userDetails('123', {name:'sagor', age:34}))
// class Player {
//     public name: string; 
//     private age: number;
//     readonly country: string
//     constructor(n:string , a:number , c:string){
//         this.name = n;
//         this.age = a;
//         this.country = c;
//     }
//     play(){
//        return `${this.name} from ${this.country} is playing`
//     }
// }
// // shotHand
// class Players {
//     constructor(
//         public name:string ,
//         private age: number ,
//         readonly country: string ,
//     ){}
//     play(){
//         return `${this.name} from ${this.country} is playing`
//      }
// }
// const masrafi = new Player('masrafi' , 34 , 'Bangladesh')
// // console.log(masrafi)
// // console.log(masrafi.play())
// const players:Player[] = []
// // players.push('sagor') error message
// players.push(new Player('sagor', 34 , 'Bangladesh') )
// players.push(masrafi)
// console.log(players[0])
// import Player from './classes/Player.js'
// const masrafi = new Player('masrafi', 34 , 'Bangladesh')
// const sakib = new Player('sakib', 34 , 'Bangladesh')
// console.log(sakib.age)
// console.log(sakib.country)
// const Players: Player[] = []
// Players.push(masrafi)
// Players.push(sakib)
// interface RectangleOptions {
//     width: number,
//     length: number,
// }
// function drawRectangle(options:RectangleOptions){
//     let width = options.width
//     let length = options.length
// }
// drawRectangle({width:20 , length:30})
// // drawRectangle({width:12 , length:23 , height:20})
// let options = {width:12 , length:23 , height:20}
// drawRectangle(options)
// import Player from "./classes/Player.js";
// import Isplayer from './interface/IsPlayer.js';
// const masrafi = new Player('masrafi' , 52 , 'bangladesh')
// let sakib : Isplayer;
// sakib = new Player('sakib', 52 , 'bangladesh')
// const players:Isplayer[] = []
// players.push(masrafi)
// players.push(sakib)
// Generics
// const addId = <T extends {name:string , age:number , country:string}>(obj:T) =>{
//     let id = Math.floor(Math.random()*100);
//     return {...obj , id};
// }
// // const addId = <T extends object>(obj:T) =>{
// //     let id = Math.floor(Math.random()*100);
// //     return {...obj , id};
// // }
// // let user = addId({
// //     name:"masrafi",
// //     age:20,
// //     country:"bangladesh"
// // });
// let user = addId({name:"masrafi", age:23, country:"bangladesh"});
// interface APIResponse<T>{
//     status: number ;
//     type: string ;
//     data: T;
// }
// const response1: APIResponse<object>= {
//     status: 200,
//     type: "success",
//     data: {
//         message: "Data fetched successfully"
//     }
// }
// const response2: APIResponse<string>= {
//     status: 404,
//     type: "error",
//     data: "Data not found"
// }
// console.log(response1)
// ENUM
// enum Type { SUCCESS , FAILURE , UNAUTHETICATED , FORBIDDEN}
// interface APIResponse<T>{
//     status: number ;
//     type: Type ;
//     data: T;
// }
// const response1: APIResponse<object> = {
//     status: 200,
//     type: Type.SUCCESS,
//     data: {
//         message: "Data fetched successfully"
//     }
// }
// let a = [2 , 'hello' , {p:3}]
// // a[2] = false error message
// a[3] = 2
// let b: [string , number , object ] = ['string',34 , {p:3}]
