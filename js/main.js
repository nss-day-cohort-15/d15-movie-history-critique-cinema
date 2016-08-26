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
  console.log("load some movies");

}

prepFbMoviesForDomLoad(); //this will move into the log in user event listener to run after authentication.

//User Login
$("#auth-btn").click(function() {
  console.log("clicked auth");
  login()
  .then(function(result){
    let user = result.user;
    console.log("logged in user", user.uid);
  });
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


