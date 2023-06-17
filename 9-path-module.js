const path = require("path");

console.log(path.sep); // '/' is the path seperator

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

const baseName = path.basename(filePath);
console.log(baseName);

console.log(path.resolve(__dirname,"content","subfolder","test.txt"));
//path.resolve returns an absolute(full, complete) path
