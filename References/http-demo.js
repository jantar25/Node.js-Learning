const http = require("http");

//Create a server object
http
  .createServer((req, res) => {
    //writing response
    res.write("Hello World");
    res.end();
  })
  .listen(5000, () => console.log("Server is up..."));
