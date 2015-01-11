/**
 * Represents information about movie rental
 */

// TODO: refactor magic numbers if logic become more complicated

function Rental(movie, daysRented) {
  this.movie = movie;
  this.daysRented = daysRented;
}

Rental.prototype = {
  // calculate amount for rental
  getAmount: function(){
    var rental = this,
      amount = 0;
    switch(rental.movie.priceCode)
    {
      case REGULAR:
        amount += 2;
        if(rental.daysRented > 2)
          amount += (rental.daysRented - 2) * 1.5;
        break;
      case NEW_RELEASE:
        amount += rental.daysRented * 3;
        break;
      case CHILDREN:
        amount += 1.5;
        if(rental.daysRented > 3)
          amount += (rental.daysRented - 3) * 1.5;
        break;
    }
    // save values for table
    rental.amount = amount;
    return amount;
  },

  calculatePoints: function(){
    if (this.movie.priceCode == NEW_RELEASE && this.daysRented > 1) {
      return 2;
    } else {
      return 1;
    }
  }
};