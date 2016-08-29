"use strict";

let db = require("./db-interactions"),
  login = require("./user"),
  fb = require("./api-config"),
  dom = require("./dom-builder"),
  currentUser = null,
  Handlebars = require("hbsfy/runtime"),
  searchTemplate = require('../templates/movies/movie.hbs'),
  // userTemplate = require('../templates/movies/userMovies.hbs'),
  currentMovie = null,
  myMovies = [];
  // movieData = require('../templates/movies/movie-data.js');



function newMovieSearch(title) {
  db.getNewMovie(title)
    .then(function(movieData) {
      $("#movieOutput").append(searchTemplate(movieData));
      currentMovie = movieData;
    });
}
 
function showMyMovies(myMovies, isWatched) {
  console.log("showMyMovies running");
  var movies=[];
  for(var key in myMovies) {
    // console.log("key: ", key);
    if(myMovies[key].watched===isWatched){
      movies.push(myMovies[key]);
      console.log("myMovies[key]: ",  myMovies[key]);
    }
  } 
}

function searchMyMovies() {

}

function deleteMyMovie() {

}

function addToList() {

}

function prepFbMoviesForDomLoad() {
  console.log("load some movies");
  db.getUserMovies()
    .then(function(movieData){
        for(var movie in movieData) {
          console.log("user: ", movieData[movie].user);
          if(movieData[movie].user===currentUser){
            myMovies.push(movieData[movie]);
            console.log("movieData[movie]: ", movieData[movie]);
          }
        }
    });
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
    favorite: false,
    user: currentUser
  };
  console.log(movie);
  return movie;
}

 //this will move into the log in user event listener to run after authentication.
// newMovieSearch(); //this will be removed once we get a user to log in. it is here simply to allow us to ajax call omdb.

//User Login
$("#auth-btn").click(function() {
  console.log("clicked auth");
  login()
  .then(function(result){
    let user = result.user;
    console.log("logged in user", user.uid);
    currentUser = fb.auth().currentUser.uid;
    prepFbMoviesForDomLoad();
  });
});

// $(".logOutUser").click(function(event) {

// });

// To-Do : Add keypress event, validate user input, clear text input, clear current search results
$(".findNewMovie").click(function(event) {
  console.log("search button clicked");
  var movieTitle = $(".searchInput").val();
  $(".add-to-watch").toggleClass("hidden");
  newMovieSearch(movieTitle);
});

$(".show-unwatched-list").click(function(event) {
    console.log("Show Unwatched clicked");
    $(".show-unwatched-list").toggleClass("hidden");
    showMyMovies(myMovies, false);
}); 

$(".show-watched-list").click(function(event) {
    console.log("Show Watched clicked");
    $(".show-watched-list").toggleClass("hidden");
    showMyMovies(myMovies, true);
});

$(".show-favorites-list").click(function(event) {
    console.log("showFavorite clicked");
    $(".show-favorites-list").toggleClass("hidden");
});

$(".de2lete").click(function(event) {
  console.log("deleteMovie clicked");
  // console.log("currentMovie: ", currentMovie);
  // let movieId = buildFbMovieObject(currentMovie);
  // console.log("movieid: ", movieId);
  // db.addMovieToFb(movieId);
});

$(".add-to-watch").click(function(event) {
  console.log("currentMovie: ", currentMovie);
  let movieId = buildFbMovieObject(currentMovie);
  console.log("movieid: ", movieId);
  db.addMovieToFb(movieId);
  // myMovies.push(movieId);
});

$(".rateMovie").click(function(event) {

});

$(".searchFilter").click(function(event) {

});


$(".searchMyMovies").click(function(event) {

});

$(".moveNewMovies").click(function(event) {

});


