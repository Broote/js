/**
 * Represents information about movie rental
 */
function Rental(movie, daysRented) {
  this.movie = movie;
  this.daysRented = daysRented;
}

Rental.prototype = {
  getAmount: function(){
    var rental = this,
      amount = 0;
    switch(rental.movie.priceCode)
    {
      // refactor magic numbers if logic become more complicated
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
    return amount;
  }
};