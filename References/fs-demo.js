const fs = require("fs");
const path = require("path");

//Create and delete folder
fs.mkdir(path.join(__dirname, "/test2"), {}, (err) => {
  if (err) throw err;
  else {
    fs.rmdir(path.join(__dirname, "/test2"), {}, (err) => {
      if (err) throw err;
      console.log("Folder is removed....");
    });
  }
});

//Read directory
fs.readdir("test", (err, files) => {
  if (err) {
    console.log(err);
  } else {
    console.log(files);
  }
});

//Create and write into a file
fs.writeFile(
  path.join(__dirname, "/test", "Hello.txt"),
  "Hello World,",
  (err) => {
    if (err) throw err;
    console.log("File written to....");
  }
);

//File Append to avoid Overwritting of files
fs.appendFile(
  path.join(__dirname, "/test", "Hello.txt"),
  "this is Jantar",
  (err) => {
    if (err) throw err;
    console.log("File written to....");
  }
);

//Read File
fs.readFile(path.join(__dirname, "/test", "Hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

//Rename File
fs.rename(
  path.join(__dirname, "/test", "Hello.txt"),
  path.join(__dirname, "/test", "HelloJantar.txt"),
  (err) => {
    if (err) throw err;
    console.log("file renamed...");
  }
);

//Delete a file
fs.unlink(path.join(__dirname, "/test", "HelloJantar.txt"), (err) => {
  if (err) throw err;
  console.log("File deleted....");
});
