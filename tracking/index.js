const express = require('express');

const app = express();

let tracking = {};
// Use query
app.get('/tracking', (req, res) => {
  let user = req.query.username;
  let date = req.query.currentDate;

  if (!tracking[user]) {
    tracking[user] = {};
    tracking[user][date] = 0;
  }
});

app.listen(3005, () => {
  console.log('Running on 3005');
});

module.exports = app;
