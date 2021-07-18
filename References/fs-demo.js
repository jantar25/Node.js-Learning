const fs = require("fs");
const path = require("path");

//Create a folder
//fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
// if (err) throw err;
//console.log("Folder is created....");
//});

//Create and write into a file
//fs.writeFile(
// path.join(__dirname, "/test", "Hello.txt"),
// "Hello World,",
// (err) => {
//  if (err) throw err;
//  console.log("File written to....");

//File Append to avaoid Overwritting of files
//  fs.appendFile(
//    path.join(__dirname, "/test", "Hello.txt"),
//    "this is Jantar",
//   (err) => {
//     if (err) throw err;
//     console.log("File written to....");
// }
// );
// }
//);

//Read File
//fs.readFile(path.join(__dirname, "/test", "Hello.txt"), "utf8", (err, data) => {
//  if (err) throw err;
//console.log(data);
//});

//Rename File
fs.rename(
  path.join(__dirname, "/test", "Hello.txt"),
  path.join(__dirname, "/test", "HelloJantar.txt"),
  (err) => {
    if (err) throw err;
    console.log("file renamed...");
  }
);
