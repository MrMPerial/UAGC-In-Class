const https = require('https');
const express = require('express');
const fs = require('fs');

const myKey = fs.readFileSync('my-key.pem');
const myCert = fs.readFileSync('my-cert.PEM');

const options = {
  key: myKey,
  cert: myCert
};

const app = express();

app.get('/', (req, res) => {
  console.log('ROOT ENDPOINT');
  res.end('HTTPS REQUEST WITH EXPRESS');
});

https.createServer(options, app).listen(8000, () => {
  console.log('HTTP Server Listening on Port 8000');
});
