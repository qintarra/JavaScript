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


