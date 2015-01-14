window.onload = function() {
  var sorted = false;
  var customer = new Customer("Customer1").addAllRentals(FILMSINFO, sorted);
  new TextReport(customer).output();
};