/*

// Template literals

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;
console.log(`Mark's BMI is ${markBMI}`);
console.log(`John's BMI is ${johnBMI}`);
console.log(`It is ${markHigherBMI} that Mark has a higher BMI than John`);
*/

/*
const inputYear = "2019";
console.log(inputYear + 18);

// Type Conversion
console.log(Number(inputYear) + 18);
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3); // Converted to Number
console.log("23" + "10" + 3); // Converted to String
console.log("23" * "2"); // Converted to Number
console.log("23" / "2"); // Converted to Number

let n = "1" + 1; // 11
n = n - 1; // 10
console.log(n);
*/

/*
// Five falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean("Jonas"));
console.log(Boolean({}));

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height; // if height is 0, causes undefined bug

if (height) {
  console.log("YAY! Height is defined!");
} else {
  console.log("BOO! Height is UNDEFINED!");
}
*/

/*
// Equality operators

const age = "18";

if (age === 18) console.log("Age is 18! :D (Strict)"); // False

if (age == 18) console.log("Age is 18! :D (Loose)"); // True

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("Cool! 7 is an amazing number!");
} else {
  console.log("Number isn't 23 or 7");
}

if (favourite !== 23) {
  console.log("Why not 23?");
}
*/

/*
// Basic Boolean Logic (And, Or & Not)
// Logical Operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
*/

/*
//Coding Challenge #3

// const s1Dolphins = 96;
// const s2Dolphins = 108;
// const s3Dolphins = 89;

// const s1Koalas = 88;
// const s2Koalas = 91;
// const s3Koalas = 110;

// const s1Dolphins = 97;
// const s2Dolphins = 112;
// const s3Dolphins = 101;

// const s1Koalas = 109;
// const s2Koalas = 95;
// const s3Koalas = 123;

const s1Dolphins = 97;
const s2Dolphins = 112;
const s3Dolphins = 101;

const s1Koalas = 109;
const s2Koalas = 95;
const s3Koalas = 106;

const dolphinsAvgScore = (s1Dolphins + s2Dolphins + s3Dolphins) / 3;
const koalasAvgScore = (s1Koalas + s2Koalas + s3Koalas) / 3;
const minScore = 100;

console.log(
  `Dolphins score: ${dolphinsAvgScore} | Koalas score: ${koalasAvgScore}`
);

if (dolphinsAvgScore > koalasAvgScore && dolphinsAvgScore >= minScore) {
  console.log(`Dolphins win with an average score of ${dolphinsAvgScore}`);
} else if (
  dolphinsAvgScore === koalasAvgScore &&
  dolphinsAvgScore >= minScore
) {
  console.log(`Teams are tied with an average score of ${dolphinsAvgScore}`);
} else if (dolphinsAvgScore < koalasAvgScore && koalasAvgScore >= minScore) {
  console.log(`Koalas win with an average score of ${koalasAvgScore}`);
} else {
  console.log(`No team wins, score is below ${minScore}`);
}
*/

/*
// The Switch statement

const day = "monday";

switch (day) {
  case "monday": // day === "monday"
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day!");
}
*/

/*
// Statements and Expressions

// An expression: 3 + 4 (it produces a value)

// A statement
if (23 > 10) {
  const str = "23 is bigger"; // The string is an expression;
}

console.log(`I'm ${2022 - 1987} years old`);

*/

/*

// The Conditional (Ternary) Operator
const age = 23;

// age >= 18
//   ? console.log("I like to drink wine 🍷") // if age >= 18
//   : console.log("I like to drink water 💧"); // else

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
*/

/*
// Coding Challenge #4
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
*/
