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



