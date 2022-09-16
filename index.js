require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` }); //console.log(process.env);

const express = require("express");
const app = express();
const { configureEnv } = require("./config/configureEnv");

console.log(process.env);

//in the vscode terminal run : NODE_ENV=production node index.js
//or NODE_ENV=development node index.js, to get the data
//corresponding to the node environment set

const { port, email } = configureEnv();

app.get("/env-vars", (req, res) => {
  res.json({
    port,
    email,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
