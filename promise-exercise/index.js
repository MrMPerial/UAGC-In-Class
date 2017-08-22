let http = require('http');
let fs = require('fs');

let mod = require('./module');

let server = http.createServer((req, res) => {
  let mathProblems = [];

  mathProblems.push(mod.multiply(5, 5));
  mathProblems.push(mod.multiply(4, 2));
  mathProblems.push(mod.multiply(1, 3));
  mathProblems.push(mod.multiply(6, 8));
  mathProblems.push(mod.multiply(9, 0));

  Promise.all(mathProblems)
  .then((data) => {
    let answers = data.join(' ');

    res.write(answers);
    res.end();
  });
});

let port = fs.readFileSync('../port.txt', 'utf-8');
server.listen(port);
console.log('Server is listening on port ' + port);
