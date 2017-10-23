const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = {
  connect,
  disconnect,
  createEventListeners
};

function connect() {
  const uri = 'mongodb://mrmperial:1ogocm3eat@ds229415.mlab.com:29415/thelibrary';
  mongoose.connect(uri, { useMongoClient: true });
}

function disconnect() {
  mongoose.disconnect();
}

function createEventListeners() {
  mongoose.connection.on('connected', () => {
    console.log('Connected to database');
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Database connection closed');
  });

  mongoose.connection.on('error', () => {
    console.log(`there was an issue connecting with the database: ${err}`);
  });
}
