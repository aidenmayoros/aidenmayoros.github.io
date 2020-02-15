
var temp = parseInt(document.getElementById("temp").innerHTML);
var wind = parseInt(document.getElementById("wind").innerHTML);


function generateWindChill(temp, wind) {
    if (temp <= 50 && wind >= 3) {
        windchill = 35.74 + (0.6215 * temp) - (35.75 * (Math.pow(wind, 0.16))) + (0.4275 * temp * (Math.pow(wind, 0.16)));
    return windchill.toFixed(1);
    }

    else {
        return "N/A"
    }
}
     
generateWindChill(temp, wind);

document.getElementById("windchill").innerHTML = " " + generateWindChill(temp, wind) + "°" + " " + "F"; 

console.log(temp);
console.log(wind);
console.log(generateWindChill(temp, wind));