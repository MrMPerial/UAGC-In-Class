const router = require('express').Router();

const kitties = require('./kitties');
const puppies = require('./puppies');

router.get('/', (req, res) => {
  res.status(200).send('Welcome to Puppies and Kitties!');
});

router.use('/kitties', kitties);
router.use('/puppies', puppies);

module.exports = router;
