const http = require("http");

//Create a server object
const server = http.createServer((req, res) => {
  //writing request
  if (req.url === "/") {
    //writing response
    res.write("Hello World form Jantar");
    res.end();
  } else {
    res.write("Using some other domain");
    res.end();
  }
});
server.listen(5000, () => console.log("Server is up..."));
