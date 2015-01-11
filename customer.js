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

  addAllRentals: function(films) {
    for (var i = 0; i < films.length; i++) {
      var current = films[i];
      this.addRental(new Rental(new Movie(current[0], current[1]), current[2]))
    }
    return this;
  },

  addRental: function(rental) {
    this._rentals.push(rental);
    return this;
  },

  statement: function() {
    var totalAmount = 0,
      frequentRenterPoints = 0,
      result = "Rental summary for "+this.getName()+"\n",
      withTable = !!document.getElementById("show_all");

    for (var i = 0; i < this._rentals.length; i++) {
      var thisAmount, rental = this._rentals[i];

      thisAmount = rental.getAmount();
      frequentRenterPoints += rental.calculatePoints();

      if (!withTable) {
        // print results for this rental
        result += "\t" + rental.movie.title + "\t" + thisAmount.toFixed(1) + "\n";
      }
      totalAmount += thisAmount;
    }

    // print footer
    result += "Total debt: " + totalAmount.toFixed(1) + "\n";
    if (withTable) {
      result += "You earned " + frequentRenterPoints + " points";
    } else {
      result += "You earned " + frequentRenterPoints + " points for your activity";
    }

    return result;
  },

  drawTable: function() {
    var tbl = document.getElementById("show_all");
    for (var i = 0; i < this._rentals.length; i++) {
      var rental = this._rentals[i];
      var row = tbl.insertRow(-1);
      var cell1 = row.insertCell(0),
          cell2 = row.insertCell(1);
      cell1.innerHTML = rental.movie.title;
      cell2.innerHTML = rental.amount.toFixed(1);
    }
  }

};