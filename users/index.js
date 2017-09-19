const express = require('express');
const users = require('./users');
const uuidv4 = require('uuid/v4');
const moment = require('moment');
const bodyParser = require('body-parser');

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
  req.body.id = uuidv4();
  req.body.timeStamp = moment().format("YYYY-MM-DD");
  users.push(req.body);
  let newUser = addUser(users, req.body.id);
  res.status(200).json(newUser);
});

function addUser(arr, id) {
  let user;

  for (let i = 0; i < arr.length; i++) {
    if ( id.toString() === arr[i].id.toString() ) {
      user = arr[i];
    }
  }

  return user;
}

app.listen(3001, () => {
  console.log("Listening on 3001");
});

module.exports = app;
