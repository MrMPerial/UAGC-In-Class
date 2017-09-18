// Read Streams
let fs = require('fs');
let gzip = require('zlib');

let filename = 'lorem.txt';

let fileData = '';

let options = {
  encoding: 'utf-8',
  highWaterMark: 2 * 1024
};

let readable = fs.createReadStream(filename, options);

readable.on('data', (chunk) => {
  fileData += chunk;
});

readable.on('end', () => {
  console.log(fileData);
});

// Write Streams
let newfilename = 'lorem-copy.txt';

let writeable = fs.createWriteStream('newfilename');

readable.on('data', (chunk) => {
  writeable.write(chunk);
});

// Pipe Streams
readable.pipe(writable);

// Chaining Streams
let compressed = zlib.createGzip();

let zippedFileName = 'lorem.zip';
let writeable2 = fs.createWriteStream(zippedFileName);

readable.pipe(compressed).pipe(writeable2);

// Unit Testing
function aNumber() {
  return 76;
}

function multiFunc(fn) {
  return fn() * 10;
}

function testMultiFunction() {

  function testNumber() {
    return 32;
  }

  let valueToTest = multiFunc(testNumber);

  if ( valueToTest === 320) {
    console.log('Pass');
  } else {
    console.log('Fail');
  }

}

testMultiFunction();
