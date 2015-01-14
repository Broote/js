//different movie types
REGULAR = 0;
NEW_RELEASE = 1;
CHILDREN = 2;

/**
 * Stores information about movies
 */
function Movie(title) {
  this.title = title;
}

function createMovie(title, priceCode){
  switch(priceCode)
  {
    case REGULAR:
      return new Regular(title);
    case NEW_RELEASE:
      return new NewRelease(title);
    case CHILDREN:
      return new Children(title);
  }
}

Movie.prototype = {
  calculateAmount: function(daysRented){
    var amount = this.firstDaysAmount;
    if(daysRented > this.daysLimit)
      amount += (daysRented - this.daysLimit) * this.perDayAmount;
    return amount;
  }
};

Regular.prototype = new Movie();

function Regular(title){
  this.title = title;
  this.firstDaysAmount = 2;
  this.perDayAmount = 1.5;
  this.daysLimit = 2
}

NewRelease.prototype = new Movie();

function NewRelease(title){
  this.title = title;
  this.firstDaysAmount = 0;
  this.perDayAmount = 3;
  this.daysLimit = 0;
  this.bonusMovie = true
}

NewRelease.prototype.getBonus = function(days){
    var bonus = 1;
    if (days > 1){
      return bonus;
    } else {
      return 0;
    }
};

Children.prototype = new Movie();

function Children(title){
  this.title = title;
  this.firstDaysAmount = 1.5;
  this.perDayAmount = 1.5;
  this.daysLimit = 3
}
