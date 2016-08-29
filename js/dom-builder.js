"use strict";

function populateUserMovies(fbmovieData) {
    console.log("I'll populate the user's movies from FB");


}

function populateNewMovie(newMovieObj) {
    console.log("I'll put this into the DOM ", newMovieObj);
    $(".movieOutput").html(`<h2>${newMovieObj.movieTitle}</h2><h4>${newMovieObj.movieYear}</h4><h4>${newMovieObj.movieActors}</h4><button class="addToUnwatched">Add this to your unwatched list</button><button class="addToWatched">add this to your already watched list</button>`);
}



module.exports = {
    populateUserMovies,
    populateNewMovie

};
