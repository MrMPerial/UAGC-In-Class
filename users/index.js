const express = require('express');
const uuidv4 = require('uuid/v4');
const moment = require('moment');
const bodyParser = require('body-parser');

const users = require('./users');
const helpers = require('./helpers');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).json(users);
});

app.get('/users/:id', (req, res) => {
  let user;
  for (let i = 0; i < users.length; i++) {
    if ( req.params.id.toString() === users[i].id.toString() ) {
      user = users[i];
    }
  }
  res.status(200).json(user);
});

app.post('/', (req, res) => {
  let userCopy = Object.assign({}, req.body);
  let errorMessage = "You screwed up";

  if (helpers.validate(userCopy)) {
    userCopy.id = uuidv4();
    userCopy.created = moment().format("YYYY-MM-DD");
    users.push(userCopy);
    res.status(200).json(userCopy);
  } else {
    res.status(401).send(errorMessage);
  }

});

app.listen(3001, () => {
  console.log("Listening on 3001");
});

module.exports = app;
