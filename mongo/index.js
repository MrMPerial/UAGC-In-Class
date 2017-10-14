const express = require('express');
const mongodb = require('./mongodb.utils');
const Puppy = require('./puppy.model');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

mongodb.createEventListeners();
mongodb.connect();

app.get('/', (req, res) => {
  Puppy.find({}).exec()
  .then((results) => {
    console.log(results);
    res.status(200).send(results);
  }).catch((err) => {
    console.log(err);
    res.status(404);
  });
});

app.post('/puppies', (req, res) => {
  const puppy = new Puppy({
    name: req.body.name,
    breed: req.body.breed,
    age: req.body.age,
    likes: req.body.likes,
    dislikes: req.body.dislikes
  });

  puppy.save()
  .then((results) => {
    console.log(results);
  }).catch((err) => {
    throw(err);
  });
});

app.listen(3000, () => {
  console.log('Listening on 3000');
});
