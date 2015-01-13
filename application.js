window.onload = function() {
  var customer = new Customer("Dmitry").addAllRentals(FILMS);
  var report = new Report(customer);
  document.getElementById('text-report').innerHTML = report.statement();
  report.drawTable();
};
