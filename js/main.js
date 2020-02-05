/* Javascript by Christopher Pierson, 2020 */
//copied code from 'main_with_debug.js' Unit-1 repo for Activity 3
//initialize function called when the script loads
function initialize(){
	cities();
};

//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and population
	var cityPop = [
		{
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	//append the table element to the div
	$("#mydiv").append("<table>");

	//append a header row to the table
	$("table").append("<tr>");

	//add the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");

	//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };
		//causes the functions in lines 51-97 to run
    addColumns(cityPop);
    addEvents();
};

//function that adds an additional column to the table that gives a description based on population size
function addColumns(cityPop){

    $('tr').each(function(i){

    	if (i == 0){

    		$(this).append('<th>City Size</th>'); // debug: append was missing a 'p'
    	} else {

    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium'; //debug: capitalized the 's' in citysize

    		} else {
    			citySize = 'Large';
    		};

    		$(this).append('<td>' + citySize + '</td>'); // debug: (1) 'this' needed to be in parenthesis (2) '<td' was missing '>'
    	};
    });
};

//function that stores two functions that allow user interaction with the table on the webpage
function addEvents(){
	//function that causes the text color of the elements in the table to change as the cursor moves over top of the table
	$('table').mouseover(function(){ //debug: removed the '#' in "$('#table')"
		//creates the variable color and the intial text for the string
		var color = "rgb(";
		//for loop that continues as long as i is less than 3, adds 1 to i (starting from 0) for each loop
		for (var i=0; i<3; i++){
			//generates a random number between 0-255
			var random = Math.round(Math.random() * 255);
			//adds additional text to the variable 'color' that is the random # generated in line 87
			color += random; //debug: changed from string 'random' to the actual variable 'random'
			//as long as i is less than 2, add a ',' to the varible color
			if (i<2){
				color += ",";
				//once i is 2, or greater, add another random number and the text ')' - loop won't continue after this since 3 will be reached
			} else {
				color += ")";
			};
		}; // debug: closed for loop to fix error
		$(this).css('color', color);
	});
	//function that causes a pop-up notification when the table is clicked on by a user
	function clickme(){
		
		alert('Hey, you clicked me!');
	};

	$('table').on('click', clickme);
};

//call the initialize function when the document has loaded
$(document).ready(initialize()); //debug: added a ')' for the initialize function to actually run
