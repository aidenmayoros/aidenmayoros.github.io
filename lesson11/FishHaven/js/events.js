const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json' ;

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
        
        if ( towns[i].name == "Fish Haven") {

            let div = document.createElement('div');
            let event1 = document.createElement('p');
            let event2 = document.createElement('p');
            let event3 = document.createElement('p');

            event1.textContent = towns[i].events[0];
            event2.textContent = towns[i].events[1];
            event3.textContent = towns[i].events[2];

            div.appendChild(event1);
            div.appendChild(event2);
            div.appendChild(event3);

            document.querySelector('div.eventsData').appendChild(div);
            
          }




    }

});