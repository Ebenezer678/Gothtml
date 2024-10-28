// Ask the user to input their age
let userAge = parseInt(prompt("Please enter your age:"));

// Check if the age is 18 or older
if (userAge >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}


// Variables
let username = "John";         // Change to test with different users
let cartAmount = 60;           // Change to test different cart amounts
let hasDiscount = true;        // Change to true or false

// Calculate discount using ternary operator
let finalAmount = hasDiscount && cartAmount > 50 ? cartAmount * 0.8 : cartAmount;

// Determine congratulatory message
let congratulatoryMessage = hasDiscount && cartAmount > 50 
    ? "You've received a 20% discount!" 
    : "No discount applied.";

// Final message
let finalMessage = `Hello ${username}, your total after discount is $${finalAmount.toFixed(2)}. ${congratulatoryMessage}`;

// Output the final message
console.log(finalMessage);





// Variables
let name = "Alice";                        // Change to test with different users
let bioCompleted = true;                   // Change to true or false
let profilePictureUploaded = false;        // Change to true or false
let totalFriends = 15;                     // Change to test different number of friends

// Determine profile completion using ternary operator
let profileStatus = (bioCompleted && profilePictureUploaded && totalFriends > 10) 
    ? "complete" 
    : "incomplete";

// response
let response = `Hello ${name}, your profile is ${profileStatus}.`;

// Output the final message
console.log(response);




// Variables
let fname = "David";             // Change to test with different users
let membershipType = "gold";        // Can be "gold", "silver", "bronze", etc.
let yearsMember = 6;                // Change to test different years of membership

// Determine VIP access using ternary operator
let vipStatus = (membershipType === "gold" && yearsMember >= 5) 
    ? "qualify" 
    : "do not qualify";

// Final message
let answer = `Hello ${fname}, you ${vipStatus} for VIP access.`;

// Output the final message
console.log(answer);





// Variable
let temperature = 25;  // Change to test different temperatures

// Determine weather condition using ternary operator
let weatherCondition = (temperature > 30) 
    ? "hot day" 
    : (temperature < 10) 
        ? "cold day" 
        : "moderate day";

// Final message
let determinant = `The temperature is ${temperature}°C, it's a ${weatherCondition} today.`;

// Output the final message
console.log(determinant);

