"use strict";

let db = require("./db-interactions"),
  login = require("./user"),
  dom = require("./dom-builder");

function newMovieSearch() {
  console.log("new movie search");
  db.getNewMovie()
    .then(function(movieData) {
      console.log("new movie search", movieData);
    });
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

function buildNewMovieObject() {

}

function buildFbMovieObject() {

}

prepFbMoviesForDomLoad(); //this will move into the log in user event listener to run after authentication.
newMovieSearch(); //this will be removed once we get a user to log in. it is here simply to allow us to ajax call omdb.

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


