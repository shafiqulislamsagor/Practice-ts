let firstName:string = "shafiqul islam sagor"
console.log(firstName)

const json = JSON.parse('55')
console.log(typeof json)

let u:boolean = true
u = false

console.log(u)

let Any:any = 'shafiqul islam sagor';
Any = true
console.log(Any) // safe holo any


let unknownNotsafe:unknown = 'shafiqul';
unknownNotsafe = 587
console.log(unknownNotsafe)

const ArrayName:string[] = ['s','a','e']
console.log(ArrayName)


const number:number[] = [2,3,3,4]
number.push(2)
console.log(number)


const booleanArray:readonly boolean[] = [true,false,true,false]
// booleanArray.push(true)  sudu pora jai... changed kora jai na

console.log(booleanArray)