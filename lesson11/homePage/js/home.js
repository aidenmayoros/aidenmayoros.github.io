const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json' ;

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
        
        if ( towns[i].name == "Preston"||
          towns[i].name == "Soda Springs" ||
          towns[i].name == "Fish Haven") {

            let towninfo = document.createElement('div');
            let card = document.createElement('section');
            let name = document.createElement('h3');
            let motto = document.createElement('p');
            let founded = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let image = document.createElement('img');


            name.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            motto.className = "motto";
            founded.textContent = "Year Founded:" + towns[i].yearFounded;
            population.textContent = "Population" + towns[i].currentPopulation;
            rainfall.textContent = "Annual Rainfall" + towns[i].averageRainfall;
            image.setAttribute('src', "images/" + towns[i].photo);
            image.setAttribute('alt', "Town Picture");


            towninfo.appendChild(name);
            towninfo.appendChild(motto);
            towninfo.appendChild(founded);
            towninfo.appendChild(population);
            towninfo.appendChild(rainfall);
            card.appendChild(towninfo);
            card.appendChild(image);

            document.querySelector('div.town-data').appendChild(card);
          }




    }

});