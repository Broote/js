//different movie types
REGULAR = 0;
NEW_RELEASE = 1;
CHILDREN = 2;

/**
 * Stores information about movies
 */
function Movie(title, priceCode) {
  this.title = title;
  this.priceCode = priceCode;
}

Movie.prototype = {
  getAmount: function(daysRented){
    switch(this.priceCode)
    {
      case REGULAR:
        return new Regular().calculateAmount(daysRented);
      case NEW_RELEASE:
        return new NewRelease().calculateAmount(daysRented);
      case CHILDREN:
        return new Children().calculateAmount(daysRented);
    }
  },
  calculateAmount: function(daysRented){
    var amount = this.firstDaysAmount;
    if(daysRented > this.daysLimit)
      amount += (daysRented - this.daysLimit) * this.perDayAmount;
    return amount;
  }
};

function Regular(){
  this.firstDaysAmount = 2;
  this.perDayAmount = 1.5;
  this.daysLimit = 2
}

Regular.prototype = new Movie();

function NewRelease(){
  this.firstDaysAmount = 0;
  this.perDayAmount = 3;
  this.daysLimit = 0
}

NewRelease.prototype = new Movie();

function Children(){
  this.firstDaysAmount = 1.5;
  this.perDayAmount = 1.5;
  this.daysLimit = 3
}

Children.prototype = new Movie();