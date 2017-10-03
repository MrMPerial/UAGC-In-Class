const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const errorMW = require('./errMidWare');

const helper = require('./helper');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.send('Welcome to my login app!');
});

app.post('/', (req, res, next) => {

  let error1 = 'Too many requests';
  let error2 = 'Bad user request';

  let user = {
    username: req.body.username,
    password: req.body.password
  };

  let url = 'http://localhost:3001/';

  helper.sendRequest(url)
  .then( (results) => {
    const validUser = helper.validateUser(JSON.parse(results.body), user);

    if (!validUser) {
      next(error2);
    } else if (validUser) {
      const date = moment(Date.now()).format('YYYY-MM-DD');
      const url = `http://localhost:3002/tracking?username=${user.username}&currentDate=${date}`;
      return helper.sendRequest(url);
    }
  })
  .then( (results) => {
    if (results.res.statusCode === 403) {
      next(error1);
    } else {
      res.status(200).json(user);
    }
  })
  .catch( (err) => {
    next('Something Went Wrong!');
  });

});

app.use(errorMW);
app.listen(3003, () => {
  console.log('Login is listening on port 3003!');
});

module.exports = app;
