// File System Example
const fs = require("fs");

// Write file
fs.writeFileSync("test.txt", "Hello, this is a test file!");

// Read file
const data = fs.readFileSync("test.txt", "utf8");
console.log("File content:", data);
