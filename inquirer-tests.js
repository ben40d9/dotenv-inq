const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "email",
      message: "What's your email address?",
      //validate the answer
      validate: (answer) => {
        //using a regex that matches most real world addresses
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        //if user input does not match email criteria
        if (!emailRegex.test(answer)) {
          //we return an error message
          return "You have to provide a valid email address!";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "ghUsername",
      message: "What's your GitHub username?",
      //validate that the answer
      validate(answer) {
        //an empty answer would be false,
        if (!answer) {
          //in which case we return an error message
          return "Please, fill your name!";
        }
        return true;
      },
    },
  ])
  .then((answers) => {
    //just logs to show that i have values
    console.log(`Hello ${answers.email} ${answers.ghUsername}!`);
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Your console environment is not supported!");
    } else {
      console.log(error);
    }
  });
