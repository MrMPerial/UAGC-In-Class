const uuidv4 = require('uuid/v4');
const moment = require('moment');

let users = [
  {
    username: "csmitchell",
    firstname: "Chris",
    lastname: "Mitchell",
    password: "myname",
    id: uuidv4(),
    created: moment().format("YYYY-MM-DD")
  },
  {
    username: "mitchellsc",
    firstname: "Christopher",
    lastname: "Mitchell",
    password: "myothername",
    id: uuidv4(),
    created: moment().format("YYYY-MM-DD")
  },
  {
    username: "backwards",
    firstname: "sirhC",
    lastname: "llehctiM",
    password: "backwardsname",
    id: uuidv4(),
    created: moment().format("YYYY-MM-DD")
  },
  {
    username: "someoneelse",
    firstname: "SomeOne",
    lastname: "Else",
    password: "thisguy",
    id: uuidv4(),
    created: moment().format("YYYY-MM-DD")
  },
  {
    username: "jackie",
    firstname: "Jack",
    lastname: "Frost",
    password: "socold",
    id: uuidv4(),
    created: moment().format("YYYY-MM-DD")
  }
];

console.log(users);
