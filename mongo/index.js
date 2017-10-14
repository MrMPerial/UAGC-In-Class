const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://localhost:27017/dbName';

MongoClient.connect(uri, (err, db) => {
  if (err) {
    console.log(`Error connecting to database: ${err}`);
  }

  console.log('Connected successfully to database');

  insertDocuments(db, () => {
    updateDocuments(db, () => {
      removeDocuments(db, () => {
        findAllDocuments(db, () => {
          db.close();
        });
      });      
    });
  });
});

function insertDocuments(db, callback) {
  const collection = db.collection('node-test');
  const data = [{a: 1},{a: 2},{a: 3}];

  collection.insertMany(data, (err, results) => {
    if (err) {
      console.log(`Unable to insert documents: ${data}`);
    }
    console.log('Inserted documents into collection');
    callback(results);
  });
}

function findAllDocuments(db, callback) {
  const collection = db.collection('node-test');

  collection.find({}).toArray((err, docs) => {
    console.log('Found the following records:');
    console.log(docs);
    callback(docs);
  });
}

function updateDocuments(db, callback) {
  const collection = db.collection('node-test');

  collection.updateOne({ a : 2}, { $set: { b : 1 } }, (err, results) => {
    console.log('Updated the document with the field a equal to 2');
    callback(results);
  });
}

function removeDocuments(db, callback) {
  const collection = db.collection('node-test');

  collection.deleteOne({ a : 3 }, (err, results) => {
    console.log('Removed document where a equal to 3');
    callback(results);
  });
}
