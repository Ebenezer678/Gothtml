// basic arithmetic calculation
let num1 = 8;
let num2 = 10;
let addition = num1 + num2;
let subtraction = num1 - num2;
let division = num1 / num2;
let multiplication = num1 * num2;
let modulus = num1 % num2;

console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);
console.log(modulus);



// Get marks from the user for three subjects
let mathMarks = parseFloat(prompt("Enter marks for Math:"));
let scienceMarks = parseFloat(prompt("Enter marks for Science:"));
let englishMarks = parseFloat(prompt("Enter marks for English:"));

// Calculate total and average marks
let totalMarks = mathMarks + scienceMarks + englishMarks;
let averageMarks = totalMarks / 3;

// Display total and average marks
console.log("Total Marks: " + totalMarks);
console.log("Average Marks: " + averageMarks);

// Compare the average and determine the grade
let grade;

if (averageMarks >= 90) {
    grade = "A";
} else if (averageMarks >= 80) {
    grade = "B";
} else if (averageMarks >= 70) {
    grade = "C";
} else if (averageMarks >= 60) {
    grade = "D";
} else {
    grade = "F (Fail)";
}

// Display the grade
console.log("Your grade is: " + grade);
