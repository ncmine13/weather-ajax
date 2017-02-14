console.log("dis workin")
var id = prompt("Enter a zip code")
var convertToFarenheit = function(temp) {
		return Math.round((9/5)*(temp - 273) + 32);
}

$.ajax({
	url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + id + ',us' + '&appid=052f26926ae9784c2d677ca7bc5dec98',
	//url: 'http://api.openweathermap.org/data/2.5/weather?zip=60614,us&appid=052f26926ae9784c2d677ca7bc5dec98',
	type: "GET",
	dataType: 'json',
	success: function(data){
		console.log(data);

		var cityDiv = document.createElement("div")
		cityDiv.className = "city";
		var body = document.getElementsByTagName("body")[0];
		var heading = document.createElement("h1");
		heading.innerHTML = data.name;
		cityDiv.appendChild(heading)
		body.appendChild(cityDiv);

		var tempDiv = document.createElement("div")
		tempDiv.className = "temp";
		var tempKel = data.main.temp
		var currentTemp = document.createElement("h1");
		currentTemp.innerHTML =  convertToFarenheit(tempKel) + " °F";
		tempDiv.appendChild(currentTemp)
		body.appendChild(tempDiv);

		var descrDiv = document.createElement("div")
		descrDiv.className = "weather-description";
		var weatherDesc = document.createElement("h1");
		var getDescription = data.weather[0].description;
		weatherDesc.innerHTML = getDescription;
		descrDiv.appendChild(weatherDesc);
		body.appendChild(descrDiv);

		var highAndLowDiv = document.createElement("div")
		highAndLowDiv.className = "highAndLowDiv";
		var getHigh = data.main.temp_max;
		var high = document.createElement("h3");
		high.innerHTML = "High of " + convertToFarenheit(getHigh);
		highAndLowDiv.appendChild(high)
		body.appendChild(highAndLowDiv);

		var getLow = data.main.temp_min;
		var low = document.createElement("h3");
		low.innerHTML = "Low of " + convertToFarenheit(getLow)
		highAndLowDiv.appendChild(low)
		body.appendChild(highAndLowDiv);


		// var low =
		//Use the response to display the current temperature in fahrenheit, the high and low temperate in fahrenheit, the current weather "description", and the name of the city that came back from the API
	},

	fail: function(error){
		console.log(error);
	}
})
