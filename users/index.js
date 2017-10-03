const express = require('express');
const uuidv4 = require('uuid/v4');
const moment = require('moment');
const bodyParser = require('body-parser');

const users = require('./users');
const helpers = require('./helpers');
const errMiddleware = require('./err-middleware');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).json(users);
});

app.get('/users/:id', (req, res, next) => {
  let user;
  for (let i = 0; i < users.length; i++) {
    if ( req.params.id.toString() === users[i].id.toString() ) {
      user = users[i];
    }
  }

  if (user) {
    res.status(200).json(user);
  } else {
    next('this user does not exist');
  }

});

app.post('/', (req, res, next) => {
  let userCopy = Object.assign({}, req.body);
  let errorMessage = "You screwed up";

  if (helpers.validate(userCopy)) {
    userCopy.id = uuidv4();
    userCopy.created = moment().format("YYYY-MM-DD");
    users.push(userCopy);
    res.status(200).json(userCopy);
  } else {
    next('invalid user data supplied');
  }

});

app.use(errMiddleware);
app.listen(3001, () => {
  console.log('Users is listening on port 3001!');
});

module.exports = app;
