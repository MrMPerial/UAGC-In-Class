module.exports = function(err, req, res, next) {
  res.status(403).send('Forbidden: ' + err);
}
