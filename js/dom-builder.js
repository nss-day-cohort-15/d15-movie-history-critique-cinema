"use strict";

function populateUserMovies(fbmovieData){
  console.log("I'll populate the user's movies from FB");


}

function populateNewMovie(movie, movieId){
  console.log("I'll put this into the DOM ", movie);
  // $(".movieOutput").html(`<h2>${newMovieObj.movieTitle}</h2><h4>${newMovieObj.movieYear}</h4><h4>${newMovieObj.movieActors}</h4><button class="addToUnwatched">Add this to your unwatched list</button><button class="addToWatched">add this to your already watched list</button>`);
return new Promise(function (resolve, reject) {
    let movieItem = {
      title: movie ? movie.title : "",
      release: movie ? movie.release : "",
      actors: movie ? movie.actors : "",
      formTitle: movie ? `Rate "${movie.title}"` : "Add a new movie",
      btnText: movie ? "save changes" : "save movie",
      btnId: movie ? "save_edit_btn" : "save_new_btn"
    },
    form =
      `<h3>${movieItem.formTitle}</h3>
      <input type="text" id="form--title" placeholder="title" value="${movieItem.title}"></input>
      <input type="text" id="form--release" placeholder="release" value="${movieItem.release}"></input>
      <input type="text" id="form--actors" placeholder="actors" value="${movieItem.actors}"></input>
      <button id="${movieId}" class=${movieItem.btnId}>${movieItem.btnText}</button>`;
    resolve(form);
  });
}

module.exports = {
  populateUserMovies,
  populateNewMovie

};
