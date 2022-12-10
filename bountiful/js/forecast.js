const forecastURL = "//api.openweathermap.org/data/2.5/forecast?id=5334223&appid=5bf13a3b6848e59ad020561c5b9615d9&units=imperial"

//Go fetch it and then wait for a response.
fetch(forecastURL)
.then((response) => response.json())
.then((weatherInfo) => {
 //Once it comes back, display it to the console.
 console.log(weatherInfo);

 const iconcode1 = weatherInfo.list[1].weather[0].icon;
 const iconcode2 = weatherInfo.list[2].weather[0].icon;
 const iconcode3 = weatherInfo.list[3].weather[0].icon;

 const icon_path1 = "//openweathermap.org/img/w/" + iconcode1 +".png";
 const icon_path2 = "//openweathermap.org/img/w/" + iconcode2 +".png";
 const icon_path3 = "//openweathermap.org/img/w/" + iconcode3 +".png";
 console.log(icon_path1)

 document.getElementById("weather_icon1").src = icon_path1;
 document.getElementById("weather_icon2").src = icon_path2;
 document.getElementById("weather_icon3").src = icon_path3;
 
 

}); //end of "then" fat arrow function