const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=88b895fa4815bc85c2b6ee08540fbf86';

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

const forecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=88b895fa4815bc85c2b6ee08540fbf86';

fetch(forecast)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    var i = 0;
    var k = 0;

    while (k < 5 && i < 40) {
        var time = jsObject.list[i].dt_txt;
        if (time.includes('18:00:00')) {      
        let date = new Date(time);
        let weekdayOption = {
            weekday: 'short'
        };
        
        let weekday = date.toLocaleDateString('en-US', weekdayOption);
        let labelId = 'day' + k;
        document.getElementById(labelId).textContent = weekday;

        let iconId = 'weather-icon' + k;
        let icon = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png'
        let description = jsObject.list[i].weather[0].description;
        document.getElementById(iconId).setAttribute('src', icon);
        document.getElementById(iconId).setAttribute('alt', description);
        
        let tempId = 'forcast' + k;
        let temp = document.getElementById(tempId).textContent = Math.round(jsObject.list[i].main.temp) + " °F";


        k++;
    }
    i++;
}
})

