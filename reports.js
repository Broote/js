function Report(){
}


Report.prototype = {

  getAmountAndPoints: function() {
    var totalAmount = 0,
        frequentRenterPoints = 0;

    for (var i = 0; i < this.customer._rentals.length; i++) {
      var rental = this.customer._rentals[i];
      frequentRenterPoints += rental.calculatePoints();
      totalAmount += rental.getAmount();
    }
    return {
      points: frequentRenterPoints,
      amount: totalAmount
    }
  }

};

function TextReport(customer){
  this.customer = customer;
  this.output = function() {
    var result = "";
    var values = this.getAmountAndPoints();
    for (var i = 0; i < this.customer._rentals.length; i++) {
      var rental = this.customer._rentals[i];
      result += "\t" + rental.movie.title + "\t" + rental.amount.toFixed(1) + "\n";
    }
    result = "Rental summary for " + this.customer.getName() + "\n" + result;
    result += "Total debt: " + values.amount.toFixed(1) + "\n";
    result += "You earned " + values.points + " points for your activity";
    var reportNode = document.getElementById('text-report');
    reportNode.innerHTML = result;
  }
}

TextReport.prototype = new Report();

function TableReport(customer){
  this.customer = customer;
  this.output = function() {
    var values = this.getAmountAndPoints();
    var reportNode = document.getElementById('table-report');
    reportNode.innerHTML = "";
    reportNode.appendChild(addParagraph("Rental summary for "+this.customer.getName()));
    reportNode.appendChild(addParagraph("Total debt: " + values.amount.toFixed(1)));
    reportNode.appendChild(addParagraph("You earned: " + values.points + " points"));
    this.drawTable();
  }
}

TableReport.prototype = new Report();

TableReport.prototype.drawTable = function() {
  var tbl = document.getElementById("show_all");
  for (var i = 0; i < this.customer._rentals.length; i++) {
    var rental = this.customer._rentals[i];
    var row = tbl.insertRow(-1);
    var cells = [];
    cells[0] = row.insertCell(0);
    cells[1] = row.insertCell(1);
    cells[0].innerHTML = rental.movie.title;
    cells[1].innerHTML = rental.amount.toFixed(1);
    for (var iter = 0; iter < cells.length; iter++) {
      cells[iter].className += "table-inner"
    }
  }
};

// helper
function addParagraph(text){
  var p = document.createElement("p");
  var textNode = document.createTextNode(text);
  p.appendChild(textNode);
  return p
}
