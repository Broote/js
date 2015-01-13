window.onload = function() {
  var customer = new Customer("Dmitry").addAllRentals(FILMS);
  createReport(customer, TABLE);
};
