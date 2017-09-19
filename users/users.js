const uuidv4 = require('uuid/v4');
const moment = require('moment');

let users = [
  {
    username: "csmitchell",
    firstname: "Chris",
    lastname: "Mitchell",
    password: "myname",
    id: "c086a982-2a5c-49a8-ab04-36b052e695d9",
    /*id: uuidv4()*/
    created: moment().format("YYYY-MM-DD")
  },
  {
    username: "mitchellsc",
    firstname: "Christopher",
    lastname: "Mitchell",
    password: "myothername",
    id: "6ab3bc82-bd43-404d-904b-735e9a5bd2c0",
    created: moment().format("YYYY-MM-DD")
  },
  {
    username: "backwards",
    firstname: "sirhC",
    lastname: "llehctiM",
    password: "backwardsname",
    id: "109156be-c4fb-41ea-b1b4-efe1671c5836",
    created: moment().format("YYYY-MM-DD")
  },
  {
    username: "someoneelse",
    firstname: "SomeOne",
    lastname: "Else",
    password: "thisguy",
    id: "01cf7d16-906c-4fc8-9a39-e572f9ba710d",
    created: moment().format("YYYY-MM-DD")
  },
  {
    username: "jackie",
    firstname: "Jack",
    lastname: "Frost",
    password: "socold",
    id: "153b5d77-a27e-452c-8d50-6c40a1a0e2f7",
    created: moment().format("YYYY-MM-DD")
  }
];

module.exports = users;
