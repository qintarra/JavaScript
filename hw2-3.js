// 26. Create a variable "age_1" and set it to 10
// 27. Create variable "age_2" and set it to 18
// 28. Create variable "age_3" and set it to 60
// 29. Create an if in which you will check the value of the variable age_1
// 30. If age_1 < age_2, print to console “You don’t have access cause your age is” + age_1 + “It’s less then”
// 31. If age_1 >= age_2 and age_1 < age_3, print “Welcome !” to the console
// 32. If age_1 > age_3, output “Keep calm and look Discovery channel” to the console.
// 33. Otherwise print "Technical work".

const age_1 = 10
const age_2 = 18
const age_3 = 60

// if (age_1 < age_2){
//   console.log('You don’t have access cause your age is ' + age_1 + '. It’s less then ' + age_2)
// } else if (age_1 >= age_2 && age_1 < age_3){
//   console.log('Welcome!')
// } else if (age_1 > age_3){
//   console.log('Keep calm and watch Discovery channel')
// } else {
//   console.log('Technical work')
// }

// 1*:
// Convert the written code in 26-33 points into a function that takes age as input.
// Example: const checkAge = function(age) {
// Your conversions
// }
// Print to the console the result of the function with ages 17, 18, 61

// const checkAge = function(age) {
//   if (age < age_2){
//     console.log('You don’t have access cause your age is ' + age + '. It’s less then ' + age_2)
//   } else if (age >= age_2 && age < age_3){
//     console.log('Welcome!')
//   } else if (age > age_3){
//     console.log('Keep calm and watch Discovery channel')
//   } else {
//     console.log('Technical work')
//   }
// }

// checkAge(17)
// checkAge(18)
// checkAge(61)

// 2*:
// Convert task 1* that the data type is checked first in the function. And if it's not a Number, generates an error message.

// const checkAge = function(age) {
//   if (typeof age == 'number') {

//   if (age < age_2) {
//     console.log('You don’t have access cause your age is ' + age + '. It’s less then ' + age_2)
//   } else if (age >= age_2 && age < age_3) {
//     console.log('Welcome!')
//   } else if (age > age_3) {
//     console.log('Keep calm and watch Discovery channel')
//   } else {
//     console.log('Technical work')
//   } 
// } else { console.log('Error: please, enter number')}
// }

// checkAge(18)
// checkAge('twenty')

// 3**:
// Convert task 2* in such a way that the value '2' (the string containing ONLY NUMBER) is skipped, converted to number

const checkAge = function(age) {
  if (+age){
  if (age < age_2){
    console.log('You don’t have access cause your age is ' + age + '. It’s less then ' + age_2)
  } else if (age >= age_2 && age < age_3){
    console.log('Welcome!')
  } else if (age > age_3){
    console.log('Keep calm and watch Discovery channel')
  } else {
    console.log('Technical work')
  } 
} else { console.log('Error: please, enter number')}
}

checkAge(17)
checkAge('19')
checkAge('twenty')

// 4***:
// Convert task 3* so that age is entered using the prompt function in the linked layout

// let agePromt = prompt('Enter age')
// checkAge(agePromt) 

// create html file and add line:
// <script src="./hw2.js"></script> 
// where "hw2.js" is file name with code from previous (3*) task