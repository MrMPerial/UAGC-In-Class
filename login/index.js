const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');

const helper = require('./helper');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to my login app!');
});

app.post('/', (req, res) => {

  let user = {
    username: req.body.username,
    password: req.body.password
  };

  let url = 'http://localhost:3001/';

  helper.sendRequest(url)
  .then( (results) => {
    const validUser = helper.validateUser(JSON.parse(results.body), user);

    if (!validUser) {
      res.status(401).send('Invalid User').end();
    } else if (validUser) {
      const date = moment(Date.now()).format(YYYY-MM-DD);
      const url = `http://localhost:3002/tracking?username=${user.name}&currentDate=${date}`;
      return helper.sendRequest(url);
    }
  })
  .then( (results) => {
    if (results.res.statusCode === 403) {
      res.status(401).send('Too many attempts').end();
    } else {
      res.status(200).json(user);
    }
  })

});

app.listen(3003, () => {
  console.log('App is listening on port 3003!');
});

module.exports = app;
//console.log('Made it this far...');
