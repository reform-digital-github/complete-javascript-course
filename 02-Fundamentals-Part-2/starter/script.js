"use strict";
/*

// Activating Strict Mode
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive!");

// const interface = "Audio"; // Reserved name
// const private = 534; // Reserved name
*/

/*
// Functions

function logger() {
  console.log("Hi I am Mike!");
}

logger();

function fruitMixer(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitMixer(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitMixer(2, 4);
console.log(appleOrangeJuice);
*/

/*
// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age2);

// Arrow function (function expression)
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, name) => {
  const age = 2037 - birthYear;
  const retirement = 65;
  return `${name} retires in ${retirement - age} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));
*/

/*

// Functions calling other Functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitMixer(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange piecess`;
  return juice;
}

console.log(fruitMixer(2, 3));
*/

/*
// Reviewing functions

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, name) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Bob"));
*/

/*

//Coding Challenge #1

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (number1, number2, number3) =>
  (number1 + number2 + number3) / 3;

// 2. Use the function to calculate the average for both teams
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins, avgKoalas);

const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);
console.log(avgDolphins2, avgKoalas2);

// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins by double score 😒");
  }
}

// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));
*/

/*
// ARRAYS

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

// Method 1 - Array Literal
const friends = ["Michael", "Steven", "Peter"];
console.log(`You have ${friends.length} friends!`);
friends.push("Jay");
const newLength = friends.push("David"); // Push and calculate length at the same time
console.log(friends);
console.log(friends[0]); // First item
console.log(`You now have ${newLength} friends!`);
console.log(friends[friends.length - 1]); // Last item
friends.unshift("Leonard"); // Push but add to the front
friends[2] = "George";
console.log(friends);
friends.pop(); // Remove last item
friends.shift(); // Remove first item
console.log(friends);
console.log(friends.indexOf("Michael"));
console.log(friends.indexOf("Bob")); // Item not exist = -1
console.log(friends.includes("Michael")); // True
console.log(friends.includes("Bob")); // False

friends.push(23);
console.log(friends.includes("23")); // False (Strict)
console.log(friends.includes(23)); // True (Strict) 

// Method 2 - with New keyword
const years = new Array(1980, 1999, 2001, 2022);
console.log(years);
console.log(years[1]);
*/

/*
// Coding Challenge #2

// If bill is between 50 and 500, tip is 15%
// If bill is anything else, tip is 20%

// Function to calculate tip

// const calcTip = function (bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// };
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

console.log(calcTip(100));
console.log(calcTip(1000));

// Array with bills
const bills = [125, 555, 44, 100, 1000];
console.log(bills);

// Array with tips
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const tips = [];
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
}
console.log(tips);

// Array with totals
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[1]];;
const total = [];
for (let i = 0; i < bills.length; i++) {
  total.push(bills[i] + tips[i]);
}
console.log(total);
*/

/*
// Objects

// The "Array" way
// Item order matters
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "Teacher",
  ["Michael", "Peter", "Steven"],
];
console.log(jonasArray);

// The "Object" way (with key-value pairs)
// Object literal {}
// Item order does not matter
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);
*/

/*

// Dot vs Bracket notation
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);
console.log(jonas.lastName); // Dot notation
console.log(jonas["lastName"]); // Bracket notation

const nameKey = "Name";
console.log(jonas["first" + nameKey]); // Only works with bracket
console.log(jonas["last" + nameKey]); // Only works with bracket
// console.log(jonas."last" + nameKey); // Doesn't work

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);
console.log(jonas.interestedIn); // won't work with dot notation

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]); // works with bracket notation
} else {
  console.log("Wrong request!");
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// Challenge
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}!`
);
*/

/*
// Object Methods
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  //   calcAge: function (birthYear) {
  //     return 2037 - birthYear;
  //   },
  //   calcAge: function () {
  //     console.log(this);
  //     return 2037 - this.birthYear;
  //   },
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonas.calcAge());
console.log(jonas.age);
// console.log(jonas["calcAge"](1991)); // Bracket notation

// Challenge
// console.log(
//   `${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he ${
//     jonas.hasDriversLicense ? "has" : "doesn't have"
//   } a driver's license.`
// );

console.log(jonas.getSummary());
*/

/*
// Coding Challenge #3
const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: "78",
  height: "1.69",
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: "92",
  height: "1.95",
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
console.log(
  `${john.firstName}'s BMI (${john.calcBMI()}) is ${
    john.bmi > mark.calcBMI() ? "higher" : "lower"
  } than ${mark.firstName}'s BMI (${mark.bmi})`
);

*/

// The For Loop
// for (let i = 1; i <= 10; i++) {
//   console.log(`Lifting weights repetition ${i} 🏋️‍♀️`);
// }

/*
// Looping Arrays

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "Teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);

  // Filling an array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}
// console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
// console.log(ages);

console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonas.length; i++) {
  // Continue
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonas.length; i++) {
  // Continue
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}
*/

/*

// Looping Backwards & Loop in Loop
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "Teacher",
  ["Michael", "Peter", "Steven"],
];

// Looping backwards
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------- Starting exercise ${exercise} -------`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}

*/

/*
// The While Loop
// for (let i = 1; i <= 10; i++) {
//   console.log(`Lifting weights repetition ${i} 🏋️‍♀️`);
// }

let i = 1;
while (i <= 10) {
  //   console.log(`Lifting weights repetition ${i} 🏋️‍♀️`);
  i++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("You rolled a 6!!!");
  }
}
*/

/*

// Coding Challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(bills), calcAverage(tips), calcAverage(totals));
*/
