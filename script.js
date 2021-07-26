const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const readStream = fs.createReadStream("./jantar.jpg");
  res.writeHead(200, { "content-typ": "image/jpg" });
  readStream.pipe(res);
  // if (req.url === "/") {
  //   res.end("<h1>HomePage</h1>");
  // }
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
