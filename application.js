window.onload = function() {
  var sorted = true;
  var customer = new Customer("Dmitry").addAllRentals(FILMS, sorted);
  new TableReport(customer).output();
};
