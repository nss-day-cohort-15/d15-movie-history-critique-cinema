"use strict";
let firebase = require("./api-config"),
    provider = new firebase.auth.GoogleAuthProvider();

function logInGoogle() {
  return firebase.auth().signInWithPopup(provider);
}

module.exports = logInGoogle;
