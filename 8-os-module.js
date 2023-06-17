const os = require("os");

// info abt current user
const user = os.userInfo();
console.log(user);

//method that returns system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

//some functions of the os module
const currentOS={
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}
console.log(currentOS);