// type aliases

type stringorNumber = string | number 

type stringorNumberArray = (string | number)[]

type Guitarist = {
    name? : string , 
    active : boolean ,
    albums: stringorNumberArray
}

type UserId = stringorNumber

// Literals type
let myName: 'Dave'

let userName : 'Dave' | 'john' | 'any'
userName = "Dave"

// functions
const add = (a: number , b: number):number => {
    return a + b
}

//type aliesase 
interface Chat {
    username:string;
    id:number;
    
}


