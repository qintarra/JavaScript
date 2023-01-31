let line = prompt ('Enter the line: ')

let countError = 0;

if (!(line.length >= 5 && line.length <= 64)){
    alert('The length of the line is invalid.')
    countError++;
}

if (!(/[a-zа-яё]/i.test(line))){
    alert('The line doesn\'t have letters.')
    countError++;
}

if (!(/[A-ZА-ЯЁ]/.test(line))){
    alert('The line doesn\'t have uppercase letters.')
    countError++;
}

if (!(/[0-9]/i.test(line))){
    alert('The line doesn\'t have numbers.')
    countError++;
}

if (!(/[@]/i.test(line))){
    alert('The line doesn\'t have an "@".')
    countError++;
}

countError === 0 ? alert('Congratilations! The line is valid.') : alert ('The line consists '+ countError + ' mistakes.')