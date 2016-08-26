(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

module.exports = {

};
},{}],2:[function(require,module,exports){

},{}],3:[function(require,module,exports){
"use strict";

let db = require("./db-interactions"),
  login = require("./user"),
  dom = require("./dom-builder");

function newMovieSearch() {

}

function searchMyMovies() {

}

function deleteMyMovie() {

}

function addToList() {

}

function prepFbMoviesForDomLoad() {
  console.log("load some songs");

}

prepFbMoviesForDomLoad(); //this will move into the log in user event listener to run after authentication.

//event listeners
$(".logInUser").click(function(event) {

});

// $(".logOutUser").click(function(event) {

// });

$(".findNewMovie").click(function(event) {

});

$(".searchMyMovies").click(function(event) {

});

$(".showUnwatchedMovies").click(function(event) {

});

$(".showWatchedMovies").click(function(event) {

});

$(".deleteMovie").click(function(event) {

});

$(".addToWatched").click(function(event) {

});

$(".addToUnwatched").click(function(event) {

});

$(".rateMovie").click(function(event) {

});

$(".searchFilter").click(function(event) {

});

$(".moveNewMovies").click(function(event) {

});


},{"./db-interactions":1,"./dom-builder":2,"./user":4}],4:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}]},{},[3]);
