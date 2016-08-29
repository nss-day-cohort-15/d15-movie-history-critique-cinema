"use strict";

//this imports needed variables from other areas of the project.
let firebase = require("./api-config");
var userMovie = getMovieTitle();

// To-Do: add .fail reject error messages
//gets user movies from the firebase database
function getUserMovies(callback) {
  return new Promise(function(resolve, reject){
    $.ajax({
      url: 'https://movie-history-e8f3d.firebaseio.com/movies.json'
    }).done(function(movieData){
      resolve(movieData);
    });
  });
}

// function getWatchedMovies(callback) {
//   return new Promise(function(resolve, reject){
//     $.ajax({
//       url: 'https://movie-history-e8f3d.firebaseio.com/movies.json'
//     }).done(function(movieData){
//       resolve(movieData);
//     });
//   });
// }

//this function pushes new movie objects to the firebase database
function addMovieToFb(movieFormObj) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: 'https://movie-history-e8f3d.firebaseio.com/movies.json',
      type: 'POST',
      data: JSON.stringify(movieFormObj),
      dataType: 'json'
    }).done(function(movieId) {
      resolve(movieId);
    });
  });
}

//this function deletes the chosen movie from the user's database on firebase
function deleteMovieFromFb(movieId) {
  console.log("movieId", movieId);
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: `https://movie-history-e8f3d.firebaseio.com/movies/${movieId}.json`,
      type: 'DELETE'
    }).done(function(data) {
      resolve(data);
    });
  });
}


// Gets movie object from OMDb
function getNewMovie(movieId) {
  return new Promise(function(resolve, reject){
 $.ajax({
      url: "http://www.omdbapi.com/?t="+movieId+"&y=&plot=short&r=json"
    }).done(function(movieData){
      console.log("movieData", movieData);
      resolve(movieData);
    }).fail(function(error) {
      reject(error);
    });
  });
}

//this function gets the movie's title from the input field
function getMovieTitle() {
  var inputMovie = $("#movieTitle").val();
  return inputMovie;
}

//this function edits the movie, adding the rating, then sends that edit to the firebase database
function rateMovie(movieFormObj, movieId) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: `https://movie-history-e8f3d.firebaseio.com/movies/${movieId}.json`,
      type: 'PUT',
      data: JSON.stringify(movieFormObj)
    }).done(function(data) {
      resolve(data);
    });
  });
}

//this exports our functions so they can be used in other functions in this project
module.exports = {
  getUserMovies,
  // getWatchedMovies,
  addMovieToFb,
  getNewMovie,
  deleteMovieFromFb,
  rateMovie
};
