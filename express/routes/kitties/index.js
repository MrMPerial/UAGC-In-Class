const router = require('express').Router();
const fs = require('fs');

const kitties = [
  {
    id: 1,
    name: 'ralph',
    breed: 'tuxedo',
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
    breed: 'black',
    likes: ['nothing'],
    dislikes: ['everything']
  }
];

router.get('/', (req, res) => {
  const breed = req.query.sortBy;
  let kittyData;

  if (breed) {
    kittyData = sortByBreed(kitties);
  } else {
    kittyData = kitties;
  }

  res.status(200).json(kittyData);
});

router.get('/:id', (req, res) => {
  let kitty = getKitty(kitties, req.params.id);
  res.status(200).json(kitty);
});

router.post('/', (req, res) => {
  const kittyId = req.body.id;
  kitties.push(req.body);
  const kitty = getKitty(kitties, kittyId);
  res.status(200).json(kitty);
});

router.put('/:id', (req, res) => {
  let kittyId = req.params.id;
  for (let i = 0; i < kitties.length; i++) {
    if ( kittyId.toString() === kitties[i].id.toString() ) {
      kitties[i].name = req.body.name;
      kitties[i].breed = req.body.breed;
      kitties[i].likes = req.body.likes;
      kitties[i].dislikes = req.body.dislikes;
    }
  }

  let kitty = getKitty(kitties, kittyId);
  res.status(200).json(kitty);
});

function getKitty(arr, id) {
  let kitty;
  for (let i = 0; i < arr.length; i++) {
    if ( id.toString() === arr[i].id.toString() ) {
      kitty = arr[i];
    }
  }

  return kitty;
}

function sortByBreed(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }

  return newArr.sort((a, b) => {
    if ( a.breed.toUpperCase() < b.breed.toUpperCase() ) {
      return -1;
    }

    if ( a.breed.toUpperCase() > b.breed.toUpperCase() ) {
      return 1;
    }

    return 0;
  });
}

module.exports = router;
