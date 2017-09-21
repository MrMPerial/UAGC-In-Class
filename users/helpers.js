module.exports = {
  validate: validate
};

function validate(newUser) {
  if (newUser.hasOwnProperty("id")) {
    return false;
  } else if (newUser.username === '' || newUser.hasOwnProperty("username") === false) {
    return false;
  } else if (newUser.firstname === '' || newUser.hasOwnProperty("firstname") === false) {
    return false;
  } else if (newUser.lastname === '' || newUser.hasOwnProperty("lastname") === false) {
    return false;
  } else if (newUser.password === '' || newUser.hasOwnProperty("password") === false) {
    return false;
  } else {
    return true;
  }
}
