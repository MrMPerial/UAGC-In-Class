const express = require('express');
const app = express();

const routes = require('./routes');

app.use(bodyParser.json());
app.use('/', routes);

app.listen(3000, () => {
  console.log('Puppies and Kitties Application listening on port 3000');
});
