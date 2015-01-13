var BONUS=1;

/**
 * Represents information about movie rental
 */

function Rental(movie, daysRented) {
  this.movie = movie;
  this.daysRented = daysRented;
}

Rental.prototype = {

  // calculate amount for rental
  getAmount: function(){
    // save values for table
    this.amount = this.movie.calculateAmount(this.daysRented);
    return this.amount;
  },

  calculatePoints: function(){
    if (this.movie.bonusMovie && this.daysRented > 1) {
      return 1 + BONUS;
    } else {
      return 1;
    }
  }
};