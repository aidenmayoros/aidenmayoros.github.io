const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=45.364472&lon=-116.392372&units=imperial&APPID=88b895fa4815bc85c2b6ee08540fbf86';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        let currentTemp = document.querySelector('#temp');
        currentTemp.textContent = jsObject.main.temp;
        let temp = Math.round(jsObject.main.temp);
        
        let currently = document.getElementById('current');
        const desc = jsObject.weather[0].description;
        currently.textContent = desc;
        
        let windSpeed  = document.getElementById('wind');
        const speed = Math.round(jsObject.wind.speed);
        windSpeed.textContent = speed;
        

        let humidity = document.getElementById('humidity');
        const currentHumidity = jsObject.main.humidity;
        humidity.textContent = currentHumidity;

        let windChill = document.getElementById('windchill');
        let chillcalc = 35.74 + (0.6215 * temp) - (35.75 * (Math.pow(speed, 0.16))) + (0.4275 * temp * (Math.pow(speed, 0.16)));
        
        if (temp <= 50 && speed >= 3) {
            windChill.textContent = Math.round(chillcalc)
        } else {
            windChill.textContent = "N/A";
        }
    })
