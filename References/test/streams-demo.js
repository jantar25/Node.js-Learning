const fs = require("fs");
//compressing data
const zlib = require("zlib");
//const gzip = zlib.createGzip();

// const readStream = fs.createReadStream("./exemple.txt", "utf-8");
// const writeStream = fs.createWriteStream("./exemple1.txt.gz");
//readStream.on("data", (chunk) => {
//writeStream.write(chunk);
// readStream.pipe(gzip).pipe(writeStream);
//});
//Uncompressing data
const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream("./exemple1.txt.gz");
const writeStream = fs.createWriteStream("./unzip.txt");
readStream.pipe(gunzip).pipe(writeStream);
