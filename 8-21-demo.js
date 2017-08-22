let http = require('http');
let fs = require('fs');

let server = http.createServer((req, res) => {
  fs.writeFile('newTextFile.txt', '', (err) => {
    if(err) throw err;
    console.log('File has successfully been created.');

    fs.appendFile('newTextFile.txt', 'New Text', (err) => {
      if(err) throw err;
      console.log('Data was successfully appended to the file.');

      fs.readFile('newTextFile.txt', 'utf-8', (err, data) => {
        if(err) throw err;
        res.write(data);
        res.end();
      });
    });
  });
});

let port = fs.readFileSync('./port.txt', 'utf-8');

server.listen(port);
console.log('Server is listening on port ' + port);
