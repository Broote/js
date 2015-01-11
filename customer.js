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

  addRental: function(rental) {
    this._rentals.push(rental);
    return this;
  },

  statement: function() {
    var totalAmount = 0,
      frequentRenterPoints = 0,
      result = "Rental summary for "+this.getName()+"\n";

    for (var i = 0; i < this._rentals.length; i++) {
      var thisAmount = 0, rental = this._rentals[i];

      // determine sum for each row
      switch(rental.movie.priceCode)
      {
        case REGULAR:
          thisAmount += 2;
          if(rental.daysRented > 2)
            thisAmount += (rental.daysRented - 2) * 1.5;
          break;
        case NEW_RELEASE:
          thisAmount += rental.daysRented * 3;
          break;
        case CHILDREN:
          thisAmount += 1.5;
          if(rental.daysRented > 3)
            thisAmount += (rental.daysRented - 3) * 1.5;
          break;
      }

      // add points for active renter
      frequentRenterPoints++;
      // bonus for two days rental
      if (rental.movie.priceCode == NEW_RELEASE && rental.daysRented > 1)
        frequentRenterPoints++;

      // print results for this rental
      result += "\t" + rental.movie.title + "\t" + thisAmount.toFixed(1) + "\n";
      totalAmount += thisAmount;
    }

    // print footer
    result += "Total debt: " + totalAmount.toFixed(1) + "\n";
    result += "You earned " + frequentRenterPoints + " points for your activity";

    return result;
  }


};