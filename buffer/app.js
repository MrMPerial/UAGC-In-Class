let http = require('http');
let fs = require('fs');

let server = http.createServer((req, res) => {
  let filename = 'lorem.txt';
  let fileData = '';
  let options = {
    encoding: 'utf-8'
  };
  let readable = fs.createReadStream(filename, options);

  readable.on('data', (chunk) => {
    fileData += chunk;
  });

  readable.on('end', () => {
    res.write(fileData);
    res.end();
  });
});

server.listen(3000);
console.log('Your server is running on port 3000');
