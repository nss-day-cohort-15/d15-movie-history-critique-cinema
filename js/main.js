"use strict";

let db = require("./db-interactions"),
  login = require("./user"),
  dom = require("./dom-builder");

function newMovieSearch(newMovieInput) {
  console.log("new movie search");
  db.getNewMovie(newMovieInput)
    .then(function(movieData) {
      console.log("new movie search", movieData);
      buildNewMovieObject(movieData);
    });
}

function searchMyMovies() {

}

function deleteMyMovie() {

}

function addToList() {

}

function prepFbMoviesForDomLoad(userId) {
  console.log("my Id is: ", userId);
  console.log("load some movies");
  db.getUserMovies(userId)
    .then (function (fbmovieData){
      dom.populateUserMovies(fbmovieData);
    });
}

function buildNewMovieObject(movieData) {
  console.log("the movie is in buildNewMovieObject ", movieData);
  let newData = movieData;
  console.log("as a variable: ", newData);
  let newMovieObj = {
    movieTitle : newData.title
  };
  console.log(newMovieObj);
}

function buildFbMovieObject() {

}


//User Login
$("#auth-btn").click(function() {
  console.log("clicked auth");
  login()
  .then(function(result){
    let user = result.user;
    console.log("logged in user", user.uid);
    let userId = user.uid;
    prepFbMoviesForDomLoad(userId);
  });
});

// $(".logOutUser").click(function(event) {

// });

$(".findNewMovie").click(function(event) {
  let newMovieInput = $(".findMovieInput").val();
  console.log("findNewMovieEL", newMovieInput);
  newMovieSearch(newMovieInput);
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
  console.log("you want to add this to your watched list");

});

$(".addToUnwatched").click(function(event) {

});

$(".rateMovie").click(function(event) {

});

$(".searchFilter").click(function(event) {

});

$(".moveNewMovies").click(function(event) {

});


