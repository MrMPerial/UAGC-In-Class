const router = require('express').Router();

const kitties = [
  {
    id: 1,
    name: 'ralph',
    breed: 'black',
    likes: ['head boops', 'laying on the couch'],
    dislikes: ['hugs']
  },
  {
    id: 2,
    name: 'lucy',
    breed: 'black tabby',
    likes: ['blankets', 'snacks'],
    dislikes: ['when other cats get pats']
  },
  {
    id: 3,
    name: 'bobby',
    breed: 'tuxedo',
    likes: ['nothing'],
    dislikes: ['everything']
  }
];

router.get('/', (req, res) => {
  res.status(200).json(kitties);
});

module.exports = router;
