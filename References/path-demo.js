const path = require("path");
//Base file name
console.log(path.basename(__filename));

//Base directory name
console.log(path.basename(__dirname));
//File extention
console.log(path.extname(__filename));
//Path Object
console.log(path.parse(__filename));
//Concatunate Paths
console.log(path.join(__dirname, "test", "hello.html"));
