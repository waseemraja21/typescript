//Type alias
type stringOrNumber = string | number
type stringOrNumberArr = (stirng | number)[]



type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArr
}

type UserId = stringOrNumber

//Literal types

let myName = 'Waseem'

let userName: 'Waseem' | 'Anim' | 'Raja'
userName = 'Anim'

//Functions


const add = (a: number, b: number): number =>{
    return a+b;
}


const logMsg = (message: any)=>{
    console.log(message);    
}

logMsg('Hello')
logMsg('World')
logMsg(add(6, 3))


let subtract = function (c: number, d: number): number{
    return c-d;
}

type mathFunction = (a: number, b: number)=>number
// interface mathFunction  {
//     (a: number, b: number):number
// }
let multiply: mathFunction = function(c, d){
    return c*d;
}

//optional parameters

const addAll = (a: number, b: number, c?:number): number=>{
    if(typeof c !== "undefined"){
        return a+b+c;
    }else{
        return a+b
    }
}


const sumAll = (a: number, b: number, c:number = 2): number=>{
    return a+b+c
}

logMsg(sumAll(2,5));
logMsg(addAll(1,3));
logMsg(addAll(2,3,5));

//Rest Parameters
const total = (a: number, ...nums: number[]): number =>{
    return a + nums.reduce((prev, curr) => prev+curr)
}
logMsg(total(1,2,3,4));

const createError = (errMsg: string)=>{
    throw new Error(errMsg)
}

const infinite = () =>{
    let i : number = 1
    while (true){
        i++
        if(i > 100) break
    }
}
//custom type guard
const isNumber = (value: any): boolean=>{
    return typeof value === 'number'
    ? true : false
}

//use of never type
const numberOrString = (value: number | string):
string =>{
    if(typeof value === 'string') return 'string'
    if(isNumber(value)) return 'number'
    return createError('This should never happen')
}