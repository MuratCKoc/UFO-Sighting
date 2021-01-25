// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");
var form = d3.select("#form")
var filterButton = d3.select("#filter-btn")
// Console.log the weather data from data.js
console.log(data);


filterButton.on("click",fillTable);
form.on("submit",fillTable);

// YOUR CODE HERE!
function fillTable(){
    //Stop refresh
    d3.event.preventDefault();

    //Get date
    var inputValue = d3.select("#datetime").property("value");
    var tbody = d3.select("tbody");
    d3.event.target.value;

    //Filter data according to date
    var filtered = tableData.filter(item => item.datetime === inputValue);
    filtered.forEach(function(rec){
    var row = tbody.append("tr");
    Object.entries(rec).forEach(([key,value]) => row.append("td").text(value));
});
    console.log("ASDASDASD");
    console.log(inputValue);

}

