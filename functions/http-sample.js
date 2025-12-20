// Real use case
// 
// Create a simple HTTP server that responds with "Hello Intern"
// Use the built-in http module
// Express is built on top of http module

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello Intern");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

// run
// node basic-built-in-function/http-sample.js
// then visit http://localhost:3000 in your browser