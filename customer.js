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

  addAllRentals: function(rentals) {
    for (var i = 0; i < rentals.length; i++) {
      this.addRental(rentals[i]);
    }
    return this;
  },

  addRental: function(rental) {
    this._rentals.push(rental);
    return this;
  }

};