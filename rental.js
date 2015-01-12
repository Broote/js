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
    var rental = this,
    // save values for table
    rental.amount = rental.movie.getAmount(rental.daysRented);
    return rental.amount;
  },

  calculatePoints: function(){
    if (this.movie.priceCode == NEW_RELEASE && this.daysRented > 1) {
      return 2;
    } else {
      return 1;
    }
  }
};