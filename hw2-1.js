// 26. Create a variable "age_1" and set it to 10
// 27. Create variable "age_2" and set it to 18
// 28. Create variable "age_3" and set it to 60
// 29. Create an if in which you will check the value of the variable age_1
// 30. If age_1 < age_2, print to console “You don’t have access cause your age is” + age_1 + “It’s less than”
// 31. If age_1 >= age_2 and age_1 < age_3, print “Welcome !” to the console
// 32. If age_1 > age_3, output “Keep calm and look Discovery channel” to the console.
// 33. Otherwise, print "Technical work".

const age_1 = 10
const age_2 = 18
const age_3 = 60

// if (age_1 < age_2){
//   console.log('You don’t have access cause your age is ' + age_1 + '. It’s less than ' + age_2)
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

const checkAge = function(age) {
  if (age < age_2){
    console.log('You don’t have access cause your age is ' + age + '. It’s less than ' + age_2)
  } else if (age >= age_2 && age < age_3){
    console.log('Welcome!')
  } else if (age > age_3){
    console.log('Keep calm and watch Discovery channel')
  } else {
    console.log('Technical work')
  }
}

checkAge(17)
checkAge(18)
checkAge(61)