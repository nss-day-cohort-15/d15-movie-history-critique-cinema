"use strict";

// Variables and requirements.
let db = require("./db-interactions"),
    login = require("./user"),
    fb = require("./api-config"),
    dom = require("./dom-builder"),
    templates = require("./dom-builder"),
    currentUser = null,
    Handlebars = require("hbsfy/runtime"),
    searchTemplate = require('../templates/movies/movie.hbs'),
    // userTemplate = require('../templates/movies/userMovies.hbs'),
    currentMovie = null,
    myMovies = [];
// movieData = require('../templates/movies/movie-data.js');


// Displays search results in DOM. Each result after that overrites previous result.
function newMovieSearch(title) {
  db.getNewMovie(title)
    .then(function(movieData) {
      $("#movieOutput").html("");
      $("#movieOutput").append(searchTemplate(movieData));
      currentMovie = movieData;
      $(".searchInput").val("");
  });
}

// Show movies in users watched movies list
function showMyMovies(userId, watchedValue) {
    console.log("showMyMovies running");
    console.log("the user is:", userId);
    console.log("the watchedValue: ", watchedValue);
    var movies = [];
    db.getUserMovies(userId)
      .then (function(myMovieData) {
        console.log("showMyMovies after promise:", myMovieData);
        for (var movie in myMovieData) {
            console.log("movie: ", movie);
            console.log(myMovieData[movie].watched);
            if (myMovieData[movie].watched === watchedValue) {
                movies.push(myMovieData[movie]);
                console.log(movies);
            }
        }
        console.log("outside for loop ", movies);
        dom.populateUserMovies(movies);
      });
}

// Stage movies based on currently logged in user to display in DOM
function prepFbMoviesForDomLoad() {
    console.log("prepFbMoviesForDomLoad running");
    db.getUserMovies()
        .then(function(movieData) {
            for (var movie in movieData) {
                console.log("user: ", movieData[movie].user);
                if (movieData[movie].user === currentUser) {
                    myMovies.push(movieData[movie]);
                    console.log("movieData[movie]: ", movieData[movie]);
                }
            }
        });
}

// Q: How would the this. method look in this function? err saying possible strict violation.   this.movie = "test";
// Build a movie object with relevant data to eventually display in DOM
function buildFbMovieObject(newMovie, watchedValue) {
    var movie = {
        Title: newMovie.Title,
        Release: newMovie.Released,
        Actors: newMovie.Actors,
        rating: null,
        watched: watchedValue,
        favorite: false,
        user: currentUser
    };
    console.log("movie returned from buildFbMovieObject: ", movie);
    return movie;
}

// Remove movie then reload the DOM w/out new movie
$(document).on("click", ".delete-btn", function () {
  let movieId = $(this).data("delete-id");
  db.deleteMovie(movieId)
  .then(function(data) {
    prepFbMoviesForDomLoad();
  });
});

$(document).on("click", ".add-to-seen-list", function () {
  console.log("currentMovie: ", currentMovie);
    let watchedValue = true;
    let movieId = buildFbMovieObject(currentMovie, watchedValue);
    console.log("movieid: ", movieId);
    db.addMovieToFb(movieId);
  });

//User Login
$("#auth-btn").click(function() {
    console.log("clicked auth");
    login()
        .then(function(result) {
            let user = result.user;
            console.log("logged in user", user.uid);
            currentUser = fb.auth().currentUser.uid;
            prepFbMoviesForDomLoad();
        });
});


//User Logout
$("#sign-out-btn").click(function() {
  console.log("clicked sign-out");
  fb.auth().signOut().then(function() {
    currentUser = null;
  console.log("sign out successful");
  window.location.reload();
  }, function(error) {
  // An error happened.
 });
});


// To-Do : Add keypress event, validate user input, clear text input, clear current search results
$(".searchInput").keypress(function(event) {

    var key = event.keyCode;
    if (key === 13) {
        console.log("Enter");
        var movieTitle = $(".searchInput").val();
        $(".add-to-watch").toggleClass("hidden");
        newMovieSearch(movieTitle);
    }
});

// This is supposed to display the unwatched movies list
$(".show-unwatched-list").click(function(event) {
    console.log("Show Unwatched clicked");
    $(".show-unwatched-list").toggleClass("hidden");
    console.log("in showunwatchedlist the user is: ",currentUser);
    let watchedValue = false;
    showMyMovies(currentUser, watchedValue);
});

// This is supposed to display the watched movies list
$(".show-watched-list").click(function(event) {
    console.log("Show Watched clicked");
    $(".show-watched-list").toggleClass("hidden");
    let watchedValue = true;
    showMyMovies(currentUser, watchedValue);
});

// This is supposed to show the favorite movies list
$(".show-favorites-list").click(function(event) {
    console.log("showFavorite clicked");
    $(".show-favorites-list").toggleClass("hidden");
});


// $(".delete").click(function(event) {
//     console.log("deleteMovie clicked");
//     console.log("currentMovie: ", currentMovie);
//     let movieId = buildFbMovieObject(currentMovie);
//     console.log("movieid: ", movieId);
//     db.addMovieToFb(movieId);
// });

// Add movie to watch list
$(".add-to-watch").click(function(event) {
    console.log("currentMovie: ", currentMovie);
    let watchedValue = false;
    let movieId = buildFbMovieObject(currentMovie, watchedValue);
    console.log("movieid: ", movieId);
    db.addMovieToFb(movieId);
    // myMovies.push(movieId);
});

// Load the new movie form
$("#add-movie").click(function() {
  console.log("clicked add movie");
  var populateNewMovie = templates.populateNewMovie()
  .then(function(populateNewMovie) {
    $(".uiContainer--wrapper").html(populateNewMovie);
  });
});
