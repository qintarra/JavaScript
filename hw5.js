// 1. Create a function that will return the sum of 2 numbers passed to this function and will write it to the console.
function sum(a, b){
    let s = a + b
    console.log(s) 
    return s 
}

sum (3, 4)
sum (-7, 2)

// 2. Create a function that returns the square of the passed number to the console.
function sqrt (c){
    let sq = c * c
    console.log(sq)
    return sq
}

sqrt (4)

// 3. Create a function. The input will take 3 parameters (name, surname, middle_name). Return JSON
function return_json (name, surname, middle_name) {
    let person_data = { 
        "name": name, 
        "surname": surname, 
        "middle_name": middle_name
    };
    let person_data_to_json = JSON.stringify(person_data)
    console.log(person_data_to_json) 
    return person_data_to_json
}

return_json ("Johann", "Sebastian", "Bach")

// 4. Output an array variable to the console that will contain all even numbers. The variable is returned by a function that takes an array of numbers as input. If there are no even numbers, the function will return the text "No even numbers".  
function evenNumbers(numbers) {
    let even_number = numbers.filter(num => num % 2 == 0);
    if (even_number.length == 0) {
      console.log("No even numbers");
    } else {
      console.log(even_number);
    }
  }

evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) 
evenNumbers([1, 3, 5])

// 5. Create a function that will return the number of "a" letters in the word passed to it. Return the text "No "a" characters" if there are no "a" letters.  
function number_of_letters (word){
    let word_letter = (word.split("a").length-1)
    if (word_letter > 0) {
        console.log("Number of \"a\" letters: " + word_letter)
    } else {
        console.log("No \"a\" characters")
    }
}
number_of_letters("Lambada")
number_of_letters("Unforgiven")

