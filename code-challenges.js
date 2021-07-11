// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"
// there needs to be a function, where variables can be INPUT and RETURN will tell us if that tempture is above or below 212 degrees.
var temp1 = 35
var temp2 = 350
var temp3 = 212
var temp4 = "green"


const tempture = (temp) => {
    if (temp > 212){
        return `${temp} is ABOVE the boiling point of 212 degress`
    } else if(temp < 212) {
        return `${temp} is BELOW the boiling point of 212 degress`
    } else if (temp == 212) {
        return `${temp} IS AT the boiling point of 212 degress`
    } else {
        return "Please enter a numerical temperature"
    }
}
//console.log(tempture(temp1))
//console.log(tempture(temp2))
//console.log(tempture(temp3))
//console.log(tempture(temp4))

















// --------------------2) Create a function that takes in two arrays of numbers and returns a single array with all the values sorted least to greatest.
// Use the test variables provided below. Expected output: [-9, -7, 0, 3, 7, 8, 9, 13, 22, 36]
///// step 1 concade both arrays 
// step 2 sort them "somehow"
// step 3 log them
//var myNumbers1 = [3, 7, 0, 36, -9]
//var myNumbers2 = [8, -7, 22, 9, 13]

var num1 = [3, 7, 0, 36, -9]
var num2 = [8, -7, 22, 9, 13]

var theNums = ((num1.concat(num2)).join()) //how do I get this string back into number to sort.


const sortingHat = (theNums) => {
    return "something"
}
  
console.log(sortingHat())












// --------------------3) Create a function that takes in a string of a single word and returns the string with all letters reversed.
// Use the test variables provided below. Expected output: "ovarb", "eilrahc"

var myString1 = "bravo"
var myString2 = "charlie"



// --------------------4) Create a function that takes in two numbers and subtracts the smaller number from the larger number.
// Use the two sets of test variables provided below. Expected output: 15, 12

var numberExample1 = 42
var numberExample2 = 27

var numberExample3 = 7
var numberExample4 = 19



// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable passed into the subtraction function is not a number.
// Use the two sets of test variables provided below. Expected output: "Your input is not a number", 3
// Hint: There is an operator in JavaScript called typeof :)

var numberExampleRefactor1 = 42
var numberExampleRefactor2 = "hello"

var numberExampleRefactor3 = 27
var numberExampleRefactor4 = 24
