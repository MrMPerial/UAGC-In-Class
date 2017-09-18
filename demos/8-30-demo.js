const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((request, response) => {
  if(request.url === '/person' && request.method === 'GET') {
    const personObject = {
      firstName: 'John',
      lastName: 'Doe'
    };
    response.writeHead(200, {
      'Content-Type': 'application/json'
    });
    response.end(JSON.stringify(personObject));
  } else if(request.url === '/person' && request.method === 'POST') {
    let body = '';
    request.on('data', (chunk) => {
      body += chunk;
    });
    request.on('end', () => {
      response.writeHead(200, {
        'Content-Type':'text/plain'
      });
      response.end(`Request Body ${body}\n`);
    });
  }
}).listen(5000, '127.0.0.1');

// curl -X POST -H 'Content-Type : application/json' -d '{ "firstName" : "Sarah" }' http://localhost:5000/person
