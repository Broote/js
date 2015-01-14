window.onload = function() {
  var sorted = true;
  var customer = new Customer("Dmitry").addAllRentals(FILMSINFO, sorted);
  new TableReport(customer).output();
};
