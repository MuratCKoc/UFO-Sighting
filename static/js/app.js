// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");
var form = d3.select("#form")
var filterButton = d3.select("#filter-btn")
// Console.log the weather data from data.js
console.log(data);

// Create event handlers
//filterButton.on("click",fillTable(function(){
//    var inp = d3.select(".form-control").property("value");
//    return inp;
//}));

filterButton.on("click",fillTable);
form.on("submit",fillTable);

// YOUR CODE HERE!
function fillTable(){
    //Stop refresh
    //d3.event.preventDefault();
    
    //var varibe = d3.select("#datetime").property("value");
    var inputDate = d3.select("#datetime");
    var inputValue = inputDate.property("value");
    var tbody = d3.select(".ufo-table");
    d3.event.target.value;

    //var varibe = d3.select("#datetime").property("value");
    console.log(varibe);
    console.log("ASDASDASD");
    console.log(inputValue);
// BONUS: Refactor to use Arrow Functions!
}

