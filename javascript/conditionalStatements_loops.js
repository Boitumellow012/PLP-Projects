// Exercise 1: Temperature check
let temperature = 20;

if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
    console.log("It's mild.");
} else {
    console.log("It's warm.");
}

switch (true) {
    case (temperature < 0):
        console.log("It's freezing!");
        break;
    case (temperature >= 0 && temperature <= 15):
        console.log("It's cold.");
        break;
    case (temperature >= 16 && temperature <= 25):
        console.log("It's mild.");
        break;
    default:
        console.log("It's warm.");
}

// Exercise 2: Divisibility Check
let number = 6;

if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both.");
} else if (number % 2 === 0) {
    console.log("Divisible by 2.");
} else if (number % 3 === 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}

switch (true) {
    case (number % 2 === 0 && number % 3 === 0):
        console.log("Divisible by both.");
        break;
    case (number % 2 === 0):
        console.log("Divisible by 2.");
        break;
    case (number % 3 === 0):
        console.log("Divisible by 3.");
        break;
    default:
        console.log("Not divisible by 2 or 3.");
}

// Exercise 3: For loops
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let j = 1; j <= 20; j++) {
    if (j % 2 === 0) console.log(j);
}

let sum = 0;
for (let k = 1; k <= 100; k++) {
    sum += k;
}
console.log(sum);

const numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
    console.log(num);
}

const numbers1 = [3, 7, 2, 5, 10, 6];
let largest = numbers1[0];
for (let num of numbers1) {
    if (num > largest) largest = num;
}
console.log(largest);

// Exercise 4: While loops
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

let j = 1;
while (j <= 20) {
    if (j % 2 === 0) console.log(j);
    j++;
}

let sumAll = 0;
let k = 1;
while (k <= 100) {
    sumAll += k;
    k++;
}
console.log(sumAll);

let m = 5;
while (m < 50) {
    console.log(m);
    m += 5;
}

// Exercise 5: Do While loops
let n = 1;
do {
    console.log(n);
    n++;
} while (n <= 10);

let sumDoWhile = 0;
let p = 1;
do {
    sumDoWhile += p;
    p++;
} while (p <= 100);
console.log(sumDoWhile);

let num;
do {
    num = parseInt(prompt("Enter a number greater than 10:"));
    if (isNaN(num)) {
        alert("Please enter a valid number.");
    }
} while (num <= 10 || isNaN(num));
console.log("Valid number entered:", num);

const secretNumber = Math.floor(Math.random() * 10) + 1;
let guess;
let attempts = 0;

do {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));
    attempts++;
    
    if (guess < secretNumber) {
        alert("Too low!");
    } else if (guess > secretNumber) {
        alert("Too high!");
    }
} while (guess !== secretNumber);

console.log(`You got it in ${attempts} tries! The number was ${secretNumber}.`);
