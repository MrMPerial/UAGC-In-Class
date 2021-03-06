const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use('/', routes);
app.get('/tacos', (req, res) => {
  res.send('It worked!');
});

app.listen(3000, () => {
  console.log('Puppies and Kitties Application listening on port 3000');
});

module.exports = app;
