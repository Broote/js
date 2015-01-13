window.onload = function() {
  var sorted = false;
  var customer = new Customer("Customer1").addAllRentals(FILMS, sorted);
  new TextReport(customer).output();
}