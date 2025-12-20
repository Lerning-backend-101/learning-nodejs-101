const fs = require("fs");

// Writing a file
fs.writeFileSync("log.txt", "Hello Intern");


fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Reading a file
const data = fs.readFileSync("log.txt", "utf8");
console.log(data);


// run
// node basic-built-in-function/file-system.js