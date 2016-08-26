"use strict";
let firebase = require("./api-config"),
    provider = new firebase.auth.GoogleAuthProvider();

function logInGoogle() {
  console.log("you are authorized!");
  return firebase.auth().signInWithPopup(provider);
}

module.exports = logInGoogle;
