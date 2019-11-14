// Assigning the data from `data.js` to a descriptive variable - Table_Data
var Table_Data = data;

console.log(Table_Data);

// YOUR CODE HERE!

// Selecting the filter button
var Filter_Button = d3.select("#filter-btn");

// Selecting the Reset button
var Reset_Button = d3.select("#reset-btn");

// Selecting the Clear button
var Clear_Button = d3.select("#clear-btn");

// Getting a reference to the table body
var tbody = d3.select("tbody");


//Appending Data in Webpage

function Retrieve_Data(data) {
	
	data.forEach((UFOData) => {
	  var row = tbody.append("tr");
	  Object.entries(UFOData).forEach(([key, value]) => {
		var cell = row.append("td");
		cell.text(value);
	  });
	});
}

function Filter_Data() {
	
	//Prevent page from refreshing in form
	d3.event.preventDefault();		
	
	// Getting the DateTime Value
	var DateTime = d3.select("#datetime").property("value");

	if (DateTime != ""){
    	Filtered_Data = Table_Data.filter(FilteredData => FilteredData.datetime === DateTime);
    }

    tbody.html("");
    Retrieve_Data(Filtered_Data);
}


function Clear_Data() {
	
	tbody.html("");
}

function Reset_Data() {
	
	tbody.html("");
	Retrieve_Data(Table_Data);
}


//Calling the Retrieve Data Function & Filter Data Function
Retrieve_Data(Table_Data);
Filter_Button.on("click", Filter_Data);
Reset_Button.on("click", Reset_Data);
Clear_Button.on("click", Clear_Data);