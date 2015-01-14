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
    if (this.movie.bonusMovie) {
      return 1 + this.movie.getBonus(this.daysRented);
    } else {
      return 1;
    }
  }
};