const GitHubStrategy = require('passport-github2').Strategy;

const User = require('../models/user.model');

const githubAuth = {
  clientID: '954fde25db7d93ce975d',
  clientSecret: 'ec38041d22b22e6f274b46eb9865f26e21e96f31',
  callbackURL: 'http://localhost:3000/login/callback'
};

module.exports = function(passport) {

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((obj, done) => {
    done(null, obj);
  });

  passport.use(new GitHubStrategy(githubAuth, findOrCreateUser));

  function findOrCreateUser(accessToken, refreshToken, profile, done) {
    const query = { 'github.id': profile.id };
    const updates = {
      $setOnInsert: {
        'github:username': profile.username,
        'github.publicRepos': profile._json.public_repos
      }
    };
    const options = { upsert: true, new: true };

    return User.findOneAndUpdate(query, updates, options)
    .then((results) => {
      return done(null, results);
    })
    .catch((err) => {
      return done(err, null);
    });
  }
}
