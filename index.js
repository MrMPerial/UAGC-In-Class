const express = require('express');
const app = express();

const routes = require('./routes');

app.use('/', routes);

app.listen(5000, () => {
  console.log('Listening on port 5000');
});
