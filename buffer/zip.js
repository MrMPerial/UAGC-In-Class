let gzip = require('zlib');
let fs = require('fs');

let compressedFile = '../lorem.zip';
let readable = fs.createReadStream(compressedFile);
let unzip = gzip.createGunzip();
let decompressedFile = fs.createWriteStream('thisFile.txt');

readable.pipe(unzip).pipe(decompressedFile);
