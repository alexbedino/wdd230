
const tempNumber = parseFloat(document.getElementById('currentTemp').textContent);

const speedNumber = parseFloat(document.getElementById('windSpeed').textContent);

let windchill = 35.74 + (0.6215*tempNumber) - (35.75*(Math.pow(speedNumber,0.16))) + (0.4275*tempNumber*Math.pow(speedNumber,0.16));
windchill = Math.round(windchill);

if(tempNumber<= 50 && speedNumber >3){
    document.getElementById("chill").textContent = "Wind Chill: "+windchill+"\xB0F";
} else {
    document.getElementById("chill").textContent = "No Wind Chill"
}

