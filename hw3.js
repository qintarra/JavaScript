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



// 3**.  Write a function that takes a word as input. The task of the function is to calculate and output to the console how many vowels and how many consonants are in the word.
// e.g. function getWordStructure(word)
// In console:
// The word (word) consists of (number) vowels and (number) consonants

//Option 1
const getWordStructure = function(word){
    let n = 0;
    let k = 0;
    let gl=["a","A", "e","E", "i", "I", "o", "O", "u", "U", "y", "Y"];
    let sogl=["b","B", "c", "C", "d", "D", "f","F", "g","G", "h","H", "j","J", "k","K", "l","L", "m","M", 
    "n","N", "p","P", "q","Q", "r","R", "s","S", "t","T", "v","V", "w","W", "x","X", "y","Y", "z","Z"];
    
        for(i = 0; i < word.length; i++){
            for(j = 0; j < gl.length; j++){
                if(word[i] === gl[j] ){
                    n++;
                    break;
                }
            }    
            for(q = 0; q < sogl.length; q++){
                if(word[i] === sogl[q]){
                    k++;
                    break;
                }
            }    
        }
        console.log("The word " + word + " consists of " + n + " vowels and "+ k + " consonants" )
    }
    getWordStructure("Metallica")
    
    //Option 2
    function getWordStructure2(word) {
        const vowels = 'aeiouy'.split('')
        const consonants = 'bcdfghjklmnpqrstvwxz'.split('')
        let numberOfVowels = 0;
        let numberofConsonants = 0;
        for(char of word.toLowerCase()) {
            if (vowels.includes(char)) numberOfVowels++;
            if (consonants.includes(char)) numberofConsonants++;
        }
        console.log(`The word ${word} consists of ${numberOfVowels} vowels and ${numberofConsonants} consonants`)
    }
    
    getWordStructure2('Michael Jackson')
    getWordStructure2('Symphony No. 9 In D Minor')
    getWordStructure2('AC/DC')
    
    //Option 3
    function getWordStructure3 (word) {  
        let vowels = word.match(/[aeiou]/gi);
        let consonants = word.match(/[bcdfghjklmnpqrstvwxyz]/gi);
        console.log("Word '" + word + "' consists of " + vowels.length + ' vowel and ' + consonants.length + " consonant letters")
    };
    
    getWordStructure3("Don't Stop Me Now");
    getWordStructure3("Florence + The Machine");
    getWordStructure3("X Æ A-12");
    