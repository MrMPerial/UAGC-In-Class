const express = require('express');
const bodyParser = require('body-parser');

const mongodb = require('./mongodb.utils');
const Author = require('./author.model');
const Book = require('./book.model');

mongodb.createEventListeners();
mongodb.connect();

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Root Endpoint');
});

app.get('/firstname', (req, res) => {
  // Couldn't get query to work
  Author.find({}).select('firstname').exec()
  .then((result) => {
    res.status(200).json(result);
  })
  .catch((err) => {
    res.status(404).send('No Author Found!');
  });
});

app.get('/lastname', (req, res) => {
  // Couldn't get query to work
  Author.find({}).select('lastname').exec()
  .then((result) => {
    res.status(200).send(result);
  })
  .catch((err) => {
    res.status(404).send('No Author Found!');
  });
});

app.get('/book', (req, res) => {
  // Couldn't get query to work
  Author.find({}).select('books').exec()
  .then((result) => {
    res.status(200).send(result);
  })
  .catch((err) => {
    res.status(404).send('No Author Found!');
  });
});

app.post('/newAuthor', (req, res) => {
  const newAuthor = new Author({
    firstname: req.body.firstname,
    lastname: req.body.lastname
  });

  newAuthor.save()
  .then((result) => {
    res.status(200).json(result);
  })
  .catch((err) => {
    res.status(500).send('Looks like something went wrong...');
  });
});

app.post('/newBook', (req, res) => {
  // Author.find({ firstname: 'Shirley', lastname: 'Jackson'}).exec()
  // .then((authorResult) => {
  //   const shirleyJackson = authorResult[0];
  //   const weHaveAlways = new Book({
  //     title: 'We Have Always Lived In The Castle',
  //     author: shirleyJackson._id
  //   });
  //   return weHaveAlways.save();
  // })
  // .then((bookResult) => {
  //   console.log(bookResult);
  //   mongodb.disconnect();
  // })
  // .catch((err) => {
  //   console.log(err);
  //   mongodb.disconnect();
  // });
  res.send('Connected to newBook Endpoint');
});

app.put('/updateAuthor', (req, res) => {
  res.send('Connected to updateAuthor Endpoint');
});

app.put('/updateBook', (req, res) => {
  res.send('Connected to updateBook Endpoint');
});

app.listen(3000, () => {
  console.log('Listening on 3000');
});







// Book.find({ title: 'We Have Always Lived In The Castle'}).populate('author').exec()
// .then((result) => {
//   console.log(result);
// })
// .catch((err) => {
//   console.log(err);
// });

// let foundBook;
// Book.find({ title: 'We Have Always Lived In The Castle' }).exec()
// .then((bookResult) => {
//   foundBook = bookResult[0];
//   return Author.find({ firstname: 'Shirley', lastname: 'Jackson' }).exec();
// })
// .then((authorResult) => {
//   let author = authorResult[0];
//   author.books.push(foundBook._id);
//   return author.save();
// })
// .then((result) => {
//   console.log(result);
// })
// .catch((err) => {
//   console.log(err);
// });

// Author.find({ firstname: 'Shirley', lastname: 'Jackson'}).exec()
// .then((authorResult) => {
//   const shirleyJackson = authorResult[0];
//   const weHaveAlways = new Book({
//     title: 'We Have Always Lived In The Castle',
//     author: shirleyJackson._id
//   });
//   return weHaveAlways.save();
// })
// .then((bookResult) => {
//   console.log(bookResult);
//   mongodb.disconnect();
// })
// .catch((err) => {
//   console.log(err);
//   mongodb.disconnect();
// });
