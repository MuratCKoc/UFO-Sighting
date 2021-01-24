// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");
var form = d3.select("#form")
var filterButton = d3.select("#filter-btn")
// Console.log the weather data from data.js
console.log(data);

//var varibe = d3.select("#datetime").property("value");
//var inputDate = d3.select("#datetime");
//var inputValue = inputDate.property("value");

//Prefill the table
//tableData.forEach(function(rec){
//    var row = tbody.append("tr");
//    Object.entries(rec).forEach(([key,value]) => row.append("td").text(value));
//});

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
    d3.event.preventDefault();

    //Get date
    var inputValue = d3.select("#datetime").property("value");
    var tbody = d3.select("tbody");
    d3.event.target.value;

    var filtered = tableData.filter(item => item.datetime === inputValue);
    console.log(filtered);
    console.log(inputValue);
    filtered.forEach(function(rec){
    var row = tbody.append("tr");
    Object.entries(rec).forEach(([key,value]) => row.append("td").text(value));
});


  //d3.select("tbody").selectAll("tr").data(filtered).enter().append("tr").html(function(d) {
  //    return `"<td>${inputValue.datetime}</td><td>${inputValue.city}</td>`
  //})
    console.log("ASDASDASD");
    console.log(inputValue);
// BONUS: Refactor to use Arrow Functions!
}

