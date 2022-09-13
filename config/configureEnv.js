/* eslint-disable no-undef */
const { port: userPort } = require("./default");

function configureEnv() {
  const port = configurePort();
  const email = configureEmail();

  return {
    port,
    email,
  };
}

function configurePort() {
  // initialize empty variable for port
  let port;

  // if port is not set...
  if (process.env.PORT === undefined) {
    // use the default. check definition of userPort!
    port = userPort;
  } else {
    port = process.env.PORT;
  }

  // // if the above "if" case isn't met, set port = to the shell env var
  // port = process.env.PORT || 3000;

  // return port, so we can use it wherever this function is called
  return port;
}

function configureEmail() {
  // configure email...follows same flow, except...
  let email;
  // if email is undefined,
  if (process.env.EMAIL === undefined) {
    // run a function that will run inquirer prompt,
    // asking user for email etc.
    // right now its just a mock, see below.
    email = promptForEmail();
  }

  // if condition not met, same as configurePort
  email = process.env.EMAIL;

  return email;
}

// this is just so we dont have to worry about inquirer functionality  yet
function promptForEmail() {
  console.log("promptForEmail invoked");
  return;
}

module.exports = {
  configureEnv,
};
