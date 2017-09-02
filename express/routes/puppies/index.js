const router = require('express').Router();

const puppies = [
  {
    id: 1,
    name: 'bear',
    breed: 'german shepard and rottweiler',
    likes: ['food', 'chasing cats', 'the couch'],
    dislikes: ['cats']
  },
  {
    id: 2,
    name: 'bella',
    breed: 'dachshund',
    likes: ['attention', 'more attention', 'sleeping in my bed'],
    dislikes: ['nothing']
  },
  {
    id: 3,
    name: 'blue',
    breed: 'pit bull',
    likes: ['running'],
    dislikes: ['nothing']
  }
];

router.get('/', (req, res) => {
  res.status(200).json(puppies);
});

module.exports = router;
