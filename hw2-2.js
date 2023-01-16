const age_1 = 10
const age_2 = 18
const age_3 = 60

// 2-2:
// Convert task 2-1 that the data type is checked first in the function. And if it's not a Number, generates an error message.

const checkAge = function(age) {
  if (typeof age == 'number') {

  if (age < age_2) {
    console.log('You don’t have access cause your age is ' + age + '. It’s less than ' + age_2)
  } else if (age >= age_2 && age < age_3) {
    console.log('Welcome!')
  } else if (age > age_3) {
    console.log('Keep calm and watch Discovery channel')
  } else {
    console.log('Technical work')
  } 
} else { console.log('Error: please, enter number')}
}

checkAge(18)
checkAge('twenty')
