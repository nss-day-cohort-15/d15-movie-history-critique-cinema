"use strict";

let $ = require('jquery'),
    firebase = require("./firebaseConfig");
    var userMovie = getMovieTitle();

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

function getNewMovie(movieId) {
  return new Promise(function(resolve, reject){
 $.ajax({
      url: `http://www.omdbapi.com/?t=${userMovie}&y=&plot=short&r=json`
    }).done(function(movieData){
      console.log("movieData", movieData);
      resolve(movieData);
    }).fail(function(error) {
      reject(error);
    });
  });
}

function getMovieTitle() {
  var inputMovie = $("#movieTitle").val();
  return inputMovie;
}

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

module.exports = {
  getUserMovies,
  // getWatchedMovies,
  addMovieToFb,
  getNewMovie,
  deleteMovieFromFb,
  rateMovie
};
