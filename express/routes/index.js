const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).send('Welcome to Puppies and Kitties!');
});

module.exports = router;
