const https = require('https');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

https.get('https://localhost:8000', (response) => {
  let body = '';
  response.on('data', (d) => {
    body += d;
  });

  response.on('end', () => {
    console.log('response end');
    console.log(body);
  });
});
