const express = require("express");
const permute = require("./computeStringPermute");

const app = express();

app.get("/permutation-index/:queryString", (req, res) => {
  // Parse params to string
  const queryString =
    typeof req.params.queryString === "string"
      ? req.params.queryString
      : req.params.queryString.toString();

  //   Get permutations of queryString and find index of queryString in array
  const indexOfGivenPermutation = permute(queryString).indexOf(queryString);

  res.json({ indexOfGivenPermutation });
});

app.listen("8080", () => {
  console.log("App listening on port 8080");
});
