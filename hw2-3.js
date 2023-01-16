

const age_1 = 10
const age_2 = 18
const age_3 = 60



// 2-3:
// Convert task 2-2 in such a way that the value '2' (the string containing ONLY NUMBER) is skipped, converted to number

const checkAge = function(age) {
  if (+age){
  if (age < age_2){
    console.log('You don’t have access cause your age is ' + age + '. It’s less than ' + age_2)
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

// 2-4:
// Convert task 3* so that age is entered using the prompt function in the linked layout

// let agePromt = prompt('Enter age')
// checkAge(agePromt) 

// create html file and add line:
// <script src="./hw2-3.js"></script> 
// where "hw2-3.js" is file name with code from previous (2-3) task