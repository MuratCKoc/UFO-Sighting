// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select(".ufo-table");
var form = d3.select("#form")
var filterButton = d3.select("#filter-btn")
// Console.log the weather data from data.js
console.log(data);
var inputDate = d3.select("#datetime").property("value");
console.log(inputDate);

// Create event handlers
filterButton.on("click",fillTable());
form.on("submit",fillTable);

// YOUR CODE HERE!
function fillTable(){
    //Stop refresh
    //d3.event.preventDefault();
    
    console.log(inputDate);
// BONUS: Refactor to use Arrow Functions!

}


var inputDate = d3.select("#datetime").text()
console.log(inputDate)
d3.select("#filter-btn").on("click", fillTable())