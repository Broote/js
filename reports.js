window.onload = function() {
  var customer = new Customer("Dmitry").addAllRentals(FILMS);
  document.getElementById('text-report').innerHTML = customer.statement();
  customer.drawTable();
};
