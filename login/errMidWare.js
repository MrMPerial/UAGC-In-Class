module.exports = function (err, req, res, next) {
  res.status(401).send('Nope! ' + err);
}
