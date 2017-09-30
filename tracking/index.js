const express = require('express');
const errorMW = require('./errMidWare');

const app = express();

let trackingCache = {};
// Use query
app.get('/tracking', (req, res, next) => {
  let user = req.query.username;
  let date = req.query.currentDate;
  let errorMessage = 'No Data';
  let exceededCalls = 'User has exceeded allowed calls';

  if (!req.query || !req.query.username || !req.query.currentDate) {
    return next(errorMessage);
  }

  if (!trackingCache[user]) {
    trackingCache[user] = {};
    trackingCache[user][date] = 0;
  }

  if (!trackingCache[user][date]) {
    trackingCache[user][date] = 0;
  }

  trackingCache[user][date] += 1;

  if (trackingCache[user][date] > 5) {
    next(exceededCalls);
  } else {
    res.json(trackingCache);
    res.status(200).end();
  }


});

app.use(errorMW);
app.listen(3005, () => {
  console.log('Running on 3002');
});

module.exports = app;
