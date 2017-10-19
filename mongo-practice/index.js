const express = require('express');
const bodyParser = require('body-parser');

const mongodb = require('./mongodb.utils');
const libraryService = require('./library.service');

mongodb.createEventListeners();
mongodb.connect();

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Root Endpoint');
});

app.get('/allAuthors', (req, res) => {
  libraryService.fetchAllAuthors()
  .then((authorsFetched) => {
    res.status(200).send(authorsFetched);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});

app.get('/searchByFirst', (req, res) => {
  libraryService.searchByFirstname(req.query.firstname)
  .then((authorFetched) => {
    res.status(200).send(authorFetched);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});

app.get('/searchByLast', (req, res) => {
  libraryService.searchByLastname(req.query.lastname)
  .then((authorFetched) => {
    res.status(200).send(authorFetched);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});

// TODO: Fix this...
app.get('/searchByBook', (req, res) => {
  libraryService.searchByBook(req.query.books)
  .then((bookFetched) => {
    res.status(200).send(bookFetched);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});

app.post('/newAuthor', (req, res) => {
  libraryService.addNewAuthor(req.body.firstname, req.body.lastname)
  .then((authorAdded) => {
    res.status(200).json(authorAdded);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});

app.post('/newBook', (req, res) => {
  let bookData = req.body.book;

  libraryService.addNewBook(bookData)
  .then((bookSaved) => {
    res.status(200).send(bookSaved);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});

app.put('/updateAuthor', (req, res) => {
  let authorData = req.body.author;

  libraryService.updateAuthor(authorData)
  .then((authorUpdated) => {
    res.status(200).send(authorUpdated);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});

app.put('/updateBook', (req, res) => {
  let bookData = req.body.book;

  libraryService.updateBook(bookData)
  .then((bookUpdated) => {
    res.status(200).send(bookUpdated);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});

app.listen(3000, () => {
  console.log('Listening on 3000');
});
