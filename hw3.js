// 1. Write a script that will count and display the result of raising 2 to the power of 10

let i = 1;
let result = 1
while (i < 11) {
result = result *2
i++
}
console.log(result)


// 1*. Convert task 1 into a function that takes as input the power to which the number 2 will be raised

//Option 1
const power = function(num) {
    let result = 1;
    for(let i = 1; i <= num; i++){
        result = result *2  
    }
    return result
}

console.log(power(10))

//Option 2
const power2 = function(num) {
    return 2**num
}

console.log(power2(10))

//Option 3
const power3 = function(num) {
    return Math.pow(2,num)
}

console.log(power3(10))



// 2. Write a script that will output 5 lines to the console in such a way that :) is displayed on the first line, :) :) on the second line, and so on
// Example in console:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let word = ':)'
let result2 = ''
for (let i=1; i<=4;i++) {
result2+=word
console.log(result2)
}


// 2*. Convert task 2 into a function that takes a string as input, which will be output to the console (as in the smiley condition), as well as the number of lines to output
// e.g. function printSmile(stroka, numberOfRows)

//Option 1
function printSmile(stroka, numberOfRows) {
    let result = '';
    for (let i = 1; i<=numberOfRows; i++){
        result+=stroka
        console.log(result)   
    }
}
printSmile(':(', 5)

//Option 2
function printSmile2(stroka, numberOfRows) {
    for (let i = 1; i<=numberOfRows; i++){
        console.log(stroka.repeat(i))  
    }
}
printSmile2('=)', 6)