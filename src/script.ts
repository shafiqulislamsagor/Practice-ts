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

type stringOrNumber = string | number
type user = {
    name:string , 
    age:number
} 

const userDetails = (
    id: string | number , 
    user : user
) : any =>{
    console.log(`User id is ${id} , name is ${user.name} , age is ${user.age}`)
}

const sayHello = (user:user):any =>{
    console.log(`Hello ${user.age > 50 ? 'sir':'Mr'} ${user.name}`)
}


userDetails('123', {name:'sagor', age:34})

sayHello({name:'sagor', age:34})