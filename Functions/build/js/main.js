"use strict";
//Literal types
let myName = 'Waseem';
let userName;
userName = 'Anim';
//Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello');
logMsg('World');
logMsg(add(6, 3));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction  {
//     (a: number, b: number):number
// }
let multiply = function (c, d) {
    return c * d;
};
//optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    else {
        return a + b;
    }
};
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(sumAll(2, 5));
logMsg(addAll(1, 3));
logMsg(addAll(2, 3, 5));
//Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//custom type guard
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
//use of never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen');
};
