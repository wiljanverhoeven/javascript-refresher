
const body = document.querySelector('body');
function print(text) {
    body.innerText += text;
}

print('Code by Thijn\n\n')

// part 1
for (let i = 0; i <= 10; i++) {
    print(i + '\n');
}

print('\n')

//part 2
let part2 = '';
for (let i = 0; i <= 500; i += 2) {
    part2 += i + ", ";
}
print(part2 + '\n')

print('\n')

// part 3
let arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

print(arrayOne + '\n')

print('\n')

// part 4
arrayFour = [];
arrayOne.forEach((tmp) => {
    arrayFour.push(tmp + 10);
})

print(arrayFour + '\n')

print('\n')

// part 5
arrayTwo = [];
for (let i = 12; i < 100; i += 2) {
    arrayTwo.push(i);
}

print(arrayTwo + '\n')

print('\n')

// part 6
let arrayThree = [];
for (let i = 0; i < arrayOne.length; i++) {
    let tmp = arrayOne[i] + arrayTwo[i];
    arrayThree.push(tmp);
}

print(arrayThree + '\n')

print('\n')

// part 7
const string = 'de dikke doode vogel'; // 4 d's
let count = 0;

let tmp = string.split('');
tmp.forEach((letter) => {
    if (letter === 'd' || letter === 'D') count++;
})

print(string + '\n')
print(count + " d's");