//You are given an array of numbers. 
//Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/

let newArray1 = [];
function greater(arr){
    return arr >= 25;
}
newArray1 = numbers.filter(greater);
//console.log(newArray1);

let newArray2 = [];
function five(arr){
    return arr%5 == 0;
}
newArray2 = numbers.filter(five);
//console.log(newArray2);

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/

let result = [];

function square(arr){
    return arr**2;
}

result = numbers.map(square);
//console.log(result);

function multiplyByTwo (arr){
    return arr*2;
}

result = numbers.map(multiplyByTwo);
//console.log(result);

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/

function greaterT (arr){
    return arr >= 20;
}

result = numbers.filter(greaterT).map(square);
//console.log(result);

function multByThree (arr){
    return arr*3;
}

result = numbers.filter(five).map(multByThree);
//console.log(result);


/*****************************************************************
Part 4: Extra not required 🌶️🌶️🌶️
******************************************************************/
/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/

// check this!
const logger = function (array) {
    return array;
};

//console.log(numbers.map(logger));

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
let test = [32, 50, 68, 86, 104];
const toCelsius = function (temperatures) {
    return (temperatures-32)*(5/9);
};

//console.log(test.map(toCelsius));

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
let hot = [50, 60, 70, 80, 90, 100];
let max = 65;
const hottestDays = function (temperatures, threshhold) {
    return (temperatures > threshhold);
};

console.log(hot.filter(hottestDays));
/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
const logHottestDays = function (temperatures, threshhold) {

};


