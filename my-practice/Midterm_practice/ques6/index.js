const path = require("path");

const filePath = "/users/shreyash/projects/app.js";

console.log("File Name:", path.basename(filePath));
console.log("Extension:", path.extname(filePath));
console.log("Directory:", path.dirname(filePath));