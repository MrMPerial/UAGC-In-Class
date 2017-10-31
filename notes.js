// Mongoose Queries

// Find all
model.find({ prop: 'string' }).exec();
.then( () => {
  // code
})
.catch( () => {
  // code
});

// Find first
model.findOne({ prop: 'string' }).exec();
.then( () => {
  // code
})
.catch( () => {
  // code
});

// Find by Id
model.findById({ 'string' });
.then( () => {
  // code
})
.catch( () => {
  // code
});

// Other queries
const query = model.find({ prop: 'string' });
// Only these properties
query.select('string');
// Limit by a set number
query.limit(number);
// descending
query.sort({ prop: -1 });
// ascending
query.sort({ prop: 1 });
// Execute
query.exec()
.then( () => {
  // code
})
.catch( () => {
  // code
});

// Chain 'em
query.find({ prop: 'string' })
.select('string');
.limit(number);
.sort({ prop: -1 });
.exec()
.then( () => {
  // code
})
.catch( () => {
  // code
});

// Actually do something
model.findById('string')
.then((result) => {
  console.log(result);
  // result is a Mongoose object
  result.prop = 'something';
  return result.save();
})
.then((updatedResult) => {
  console.log(updatedResult);
})
.catch((err) => {
  console.log(err);
});

// Do it differently -- use option 'new' in order to see new result
model.findByIdAndUpdate('string', {prop: 'string', prop: number}, { new: true })
.then((result) => {
  console.log(result);
})
.catch((err) => {
  console.log(err);
});

// Remove it by Id
model.findByIdAndRemove('string')
.then((result) => {
  console.log(result);
})
.catch((err) => {
  console.log(err);
});

// Can also find one
model.findOneAndUpdate({prop: 'string'}, { prop: 'string'})
.then((result) => {
  console.log(result);
})
.catch((err) => {
  console.log(err);
});

// Or find all
// Maybe......
model.findAndUpdate({prop: 'string'}, { prop: 'string'})
.then((result) => {
  console.log(result);
})
.catch((err) => {
  console.log(err);
});

// Or even
let variable = [];
model.find({prop: 'string'})
.then((result) => {
  console.log(result);
  for (let i = 0; i < result.length; i++) {
    result[i].prop = 1;
    variable.push(result[i].save());
  }
  return Promise.all(variable);
})
.then((newResult) => {
  console.log(newResult);
})
.catch((err) => {
  console.log(err);
});

// SSL Key Generation
/* === openssl genrsa -out my-key.pem 1024 === */

// SSL Cert Generation
/* === openssl req -new -key my-key.pem -out certrequest.csr === */
