let http = require('http');
let fs = require('fs');

let mod = require('./module');

let server = http.createServer((req, res) => {
  mod.createFile('newTextFile.txt')
  .then(() => {
    console.log('File has successfully been created.');
    return mod.appendFile('newTextFile.txt', 'More Text')
  })
  .then(() => {
    console.log('Data was successfully appended to the file.');
    return mod.readFile('newTextFile.txt', 'utf-8')
  })
  .then((data) => {
    console.log('Here\'s Johnny');
    res.write(data);
    res.end();
  })
  .catch((err) => {
    return err;
  })
});

let port = fs.readFileSync('./port.txt', 'utf-8');

server.listen(port);
console.log('Server is listening on port ' + port);
