/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/

// create a variable to store glitched password string
let glitchedPassword =
  "This password you set should no be used because it glitches the system.";

// make function with params of password and usersInput
function checkPassword(password, usersInput) {
  
  // conditional statement if the password and user's inputed password are the same, log out "Access Granted!"
  if (password === usersInput) {
    return console.log("Access Granted!");

    // else if the user's inputed password is forgot, log out "Here is a hint", and glitchedPassword
  } else if (usersInput === "forgot") {
    return console.log(`Here is a hint: ${glitchedPassword}`);

    // else if the user's inputed password is reset, log out "let's reset your account", and glitchedPassword
  } else if (usersInput === "reset") {
    return console.log("Let's reset your account: " + glitchedPassword);

    // else if user's inputed password has less than 5 characters, log out "Your password is too short!"
  } else if (usersInput.length < 5) {
    return console.log("Your password is too short!");

    // else log "Access Denied!"
  } else {
    return console.log("Access Denied!");
  }
}

// Checks to see if the function runs correctly
checkPassword("hello", "doodle");
