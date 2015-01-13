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
      Regular.prototype = new Movie(title);
      return new Regular(title);
    case NEW_RELEASE:
      NewRelease.prototype = new Movie(title);
      return new NewRelease(title);
    case CHILDREN:
      Children.prototype = new Movie(title);
      return new Children(title);
  }
}

function sortFilms(films){
  return films.concat().sort(function(a,b) {return a[0].localeCompare(b[0])});
}

Movie.prototype = {
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

//Regular.prototype = new Movie();

function NewRelease(){
  this.firstDaysAmount = 0;
  this.perDayAmount = 3;
  this.daysLimit = 0;
  this.bonusMovie = true
}

//NewRelease.prototype = new Movie();

function Children(){
  this.firstDaysAmount = 1.5;
  this.perDayAmount = 1.5;
  this.daysLimit = 3
}

//Children.prototype = new Movie();