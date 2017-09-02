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

router.get('/:id', (req, res) => {
  let puppy = getPuppy(puppies, req.params.id);
  res.status(200).json(puppy);
});

router.post('/', (req, res) => {
  const puppyId = req.body.id;
  puppies.push(req.body);
  const puppy = getPuppy(puppies, puppyId);
  res.status(200).json(puppy);
});

router.put('/:id', (req, res) => {
  let puppyId = req.params.id;
  for (let i = 0; i < puppies.length; i++) {
    if ( puppyId.toString() === puppies[i].id.toString() ) {
      puppies[i].name = req.body.name;
      puppies[i].breed = req.body.breed;
      puppies[i].likes = req.body.likes;
      puppies[i].dislikes = req.body.dislikes;
    }
  }

  let puppy = getPuppy(puppies, puppyId);
  res.status(200).json(puppy);
});

function getPuppy(arr, id) {
  let puppy;
  for (let i = 0; i < arr.length; i++) {
    if ( id.toString() === arr[i].id.toString() ) {
      puppy = arr[i];
    }
  }

  return puppy;
}

module.exports = router;
