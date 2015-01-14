window.onload = function() {
  var rentals = convertFilmsArray(FILMSINFO);
  var customer = new Customer("Customer1").addAllRentals(rentals);
  new TextReport(customer).output();
};

function convertFilmsArray(filmsInfo){
  var rentals = [];
  for (var i = 0; i < filmsInfo.length; i++) {
    var current = filmsInfo[i];
    var movie = createMovie(current[MOVIE_NAME], current[MOVIE_TYPE]);
    rentals.push(new Rental(movie, current[DAYS]))
  }
  return rentals;
}