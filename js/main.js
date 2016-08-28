"use strict";

let db = require("./db-interactions"),
  login = require("./user"),
  dom = require("./dom-builder"),
  userId,
  newMovieObj = {};

function newMovieSearch(newMovieInput) {
  console.log("new movie search");
  db.getNewMovie(newMovieInput)
    .then(function(movieData) {
      console.log("new movie search", movieData);
      let newMovieObj = buildNewMovieObject(movieData);
      console.log("after newMovieObj ", newMovieObj);
      dom.populateNewMovie(newMovieObj);
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
    movieTitle : newData.Title,
    movieYear: newData.Year,
    movieActors: newData.Actors
  };
  console.log(newMovieObj);
  return newMovieObj;
}

function buildFbMovieObject() {

}

prepFbMoviesForDomLoad(); //this will move into the log in user event listener to run after authentication.
newMovieSearch(); //this will be removed once we get a user to log in. it is here simply to allow us to ajax call omdb.

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

$(document).on("click", ".addToWatched", function() {
  console.log("you want to add this to your watched list");
  let watchedValue = true;
  console.log(newMovieObj);
  //how do I get the movie object in here?

});

$(document).on("click", ".addToUnwatched", function() {
  console.log("you want to add this to your UNwatched list");
});

$(".rateMovie").click(function(event) {

});

// $(".searchFilter").click(function(event) {
// I don't think we need to do this since we're only asking for a title at this point. a text box will do
// });



