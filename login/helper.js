const request = require('request');

module.exports = {
  sendRequest,
  validateUser
}

function sendRequest(url) {
  return new Promise((resolve, reject) => {
    request(url, (err, res, body) => {
      if (err || !res) {
        reject(`There was an issue sending request to ${url}`);
      }

      resolve({
        res: res,
        body: body || {}
      });
    });
  });
}

function validateUser(userArray, currentUser) {
  let passwordMatch = false;

  const filteredUserArray = userArray.filter((userObj) => {
    return userObj.username === currentUser.username && userObj.password === currentUser.password;
  });

  if (filteredUserArray.length > 0) {
    passwordMatch = true;
  }

  return passwordMatch;
}
