var MOVIE_NAME=0,
    MOVIE_TYPE=1,
    DAYS=2;

/**
 * Represents a customer of the movie store
 */
function Customer(name) {
  this._name = name;
  this._rentals = [];
}

Customer.prototype = {

  getName: function() {
    return this._name;
  },

  addAllRentals: function(films, sorted) {
    if (sorted) {
      // sort by name
      var sortedFilms = sortFilms(films);
    } else {
      var sortedFilms = films;
    }
    for (var i = 0; i < sortedFilms.length; i++) {
      var current = sortedFilms[i];
      var movie = createMovie(current[MOVIE_NAME], current[MOVIE_TYPE]);
      this.addRental(new Rental(movie, current[DAYS]))
    }
    return this;
  },

  addRental: function(rental) {
    this._rentals.push(rental);
    return this;
  }

};