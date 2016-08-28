"use strict";

let db = require("./db-interactions"),
  login = require("./user"),
  fb = require("./api-config"),
  dom = require("./dom-builder"),
  currentUser = null,
  Handlebars = require("hbsfy/runtime"),
  movieTemplate = require('../templates/movies/movie.hbs'),
  currentMovie = null;
  // movieData = require('../templates/movies/movie-data.js');


function newMovieSearch(title) {
  currentUser = fb.auth().currentUser.uid;
  db.getNewMovie(title)
    .then(function(movieData) {
      $("#movieOutput").append(movieTemplate(movieData));
      currentMovie = movieData;
      // console.log(movieData.Genre);


    });
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

function buildNewMovieObject() {

}

// Q: How would the this. method look in this function? err saying possible strict violation.   this.movie = "test";
function buildFbMovieObject(newMovie) {
  var movie = {
    title: newMovie.Title,
    release: newMovie.Released,
    actors: newMovie.Actors,
    rating: null, 
    watched: false,
    user: currentUser
  };
  console.log(movie);
  return movie;
}

prepFbMoviesForDomLoad(); //this will move into the log in user event listener to run after authentication.
// newMovieSearch(); //this will be removed once we get a user to log in. it is here simply to allow us to ajax call omdb.

//User Login
$("#auth-btn").click(function() {
  console.log("clicked auth");
  login()
  .then(function(result){
    let user = result.user;
    console.log("logged in user", user.uid);
    // loadMoviesToDOM();
  });
});

// $(".logOutUser").click(function(event) {

// });

// To-Do : Add keypress event, validate user input, clear text input
$(".findNewMovie").click(function(event) {
  console.log("search button clicked");
  var movieTitle = $(".searchInput").val();
  $(".add-to-watch").toggleClass("hidden");
  console.log("movieTitle: ", movieTitle);
  newMovieSearch(movieTitle);
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

$(".add-to-watch").click(function(event) {
  console.log("currentMovie: ", currentMovie);
  let movieId = buildFbMovieObject(currentMovie);
  console.log("movieid: ", movieId);
  db.addMovieToFb(movieId);
});

$(".rateMovie").click(function(event) {

});

$(".searchFilter").click(function(event) {

});

$(".moveNewMovies").click(function(event) {

});


