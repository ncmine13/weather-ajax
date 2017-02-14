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
		var body = document.getElementsByTagName("body")[0];
		var heading = document.createElement("h1");
		heading.className = "city";
		heading.innerHTML = data.name;
		body.appendChild(heading);

		var tempKel = data.main.temp
		var currentTemp = document.createElement("h1");
		currentTemp.className = "temp";
		currentTemp.innerHTML =  convertToFarenheit(tempKel);
		body.appendChild(currentTemp);

		var weatherDesc = document.createElement("h1");
		weatherDesc.className = "weather-description";
		var getDescription = data.weather[0].description;
		weatherDesc.innerHTML = getDescription;
		body.appendChild(weatherDesc);

		var getHigh = data.main.temp_max;
		var high = document.createElement("h3");
		high.className = "high";
		high.innerHTML = "High of " + convertToFarenheit(getHigh)
		body.appendChild(high);

		var getLow = data.main.temp_min;
		var low = document.createElement("h3");
		low.className = "low";
		low.innerHTML = "Low of " + convertToFarenheit(getLow)
		body.appendChild(low);


		// var low =
		//Use the response to display the current temperature in fahrenheit, the high and low temperate in fahrenheit, the current weather "description", and the name of the city that came back from the API
	},

	fail: function(error){
		console.log(error);
	}
})
