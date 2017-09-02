const router = require('express').Router();

const kitties = require('./kitties');

router.get('/', (req, res) => {
  res.status(200).send('Welcome to Puppies and Kitties!');
});

router.use('/kitties', kitties);

module.exports = router;
