let stingArr = ['one', 'hey', 'Dave']

let guiters = ['Start', 'Less Paul', 5150]

let mixedData = ['EVH', 1984, true]

stingArr[0] = 'john'
stingArr.push('hey')

guiters[0] = 1984
guiters.unshift('jim')

let test = []

let bands: string[] = []
bands.push('van Halen')

// tuple
let myTuple: [string, number, boolean] = ['Dave', 42, true]

let mixed = ['john', 1, false]

mixed = myTuple //it is possible  but viveversa not not they are diffrent

// objects
let myObj: object
myObj = []
myObj = bands
myObj = {}


const exampleobj = {
    prop1: 'Dave',
    prop2: true,
}

exampleobj.prop1 = 'john'


// // we can create a type and assign it to other
// type Guitarist = {
//     name: string,
//     active?: boolean,
//     albums: (string | number)[]
// }

interface Guitarist {
    name?:string , 
    active:true , 
    albums: (string | number)[]
    
}

 

let evh: Guitarist = {
    name: "umesh",
    active: true,
    albums: ['Dave', 3456, 'saket']

}

let jp: Guitarist = {
    active:true,
    albums: ['I', 'II', 'III']
}

const greetGuitarist = (guitarist : Guitarist) => {
    if(guitarist.name){
        return `Hello ${guitarist.name.toUpperCase()}!`
    }
    return 'Hello'
}

console.log(greetGuitarist(jp)); 


// Enums - unlike most typescript feacture, enums are not type-level
// but something is added to the language and runtime

enum Grade {
    U = 1, 
    D, 
    C, 
    A,
}
console.log(Grade.U)


