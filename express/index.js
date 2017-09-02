const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express();

const myMiddleware = (req, res, next) => {
  console.log('Hello MW');
  next();
};

app.get('/', (req, res) => {
  res.status(200).send('My root');
});

//app.use(bodyParser.json());
//app.use('/', routes);

app.listen(3000, () => {
  console.log('Puppies and Kitties Application listening on port 3000');
});
