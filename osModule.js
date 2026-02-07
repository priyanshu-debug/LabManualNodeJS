const os=require('os');
//some important funtions of os module in node js 
/*
console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.platform());
console.log(os.release());


console.log(os.totalmem());
console.log("your uptime is "+ os.uptime());
console.log("your type is"+os.type());
console.log("your user info is "+os.userInfo());
*/
// console.log(os.EOL);

// it is sed to get the infomation about your cpu
// console.log(os.cpus());

//to get the length of the object returned by cpus function
// console.log(os.availableParallelism());

/*Returns a string identifying the endianness of the CPU for which the Node.js binary was compiled.
Possible values are 'BE' for big endian and 'LE' for little endian*/
console.log(os.endianness());

