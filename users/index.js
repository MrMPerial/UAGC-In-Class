const express = require('express');
const users = require('./users');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json(users);
});

app.get('/user/:id', (req, res) => {
  let user;
  for (let i = 0; i < users.length; i++) {
    if ( req.params.id.toString() === users[i].id.toString() ) {
      user = users[i];
    }
  }
  res.status(200).json(user);
});

app.listen(3001, () => {
  console.log("Listening on 3001");
});
