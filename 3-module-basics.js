//CommonJS, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)
const names = require("./4-names");
const myName = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade"); //When u import a module you invoke the module, ie, the code inside it starts running

console.log(data);
console.log(data.items);
console.log(data.singlePerson);
console.log(names);


myName("Shravani");
myName(names.john);
myName(names.peter);