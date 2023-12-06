const cityNameInput = document.getElementById('cityName');
const getForecastButtonEl = document.getElementById('getForecastButton');
const searchHistory = document.getElementById('searchHistory');


function saveToLocalStorage(city) {
  let cities = JSON.parse(localStorage.getItem('cities')) || [];
  if (!cities.includes(city)) {
    cities.push(city);
    localStorage.setItem('cities', JSON.stringify(cities));
    displaySearchHistory(); // update search history after adding the new city
  }
}

function displaySearchHistory() {
  const searchHistory = document.getElementById('searchHistory');
  searchHistory.innerHTML = '';

  const cities = JSON.parse(localStorage.getItem('cities')) || [];
  for (let i = 0; i < cities.length; i++) {
    const city = cities[i];
    const cityBtn = document.createElement('button');
    cityBtn.textContent = city;
    cityBtn.classList.add('btn', 'btn-secondary');
    cityBtn.addEventListener('click', () => {
      getWeatherForecast(city);
    });
    searchHistory.appendChild(cityBtn);
  }
}

async function getWeatherForecast(city) {
  //START WITH 5 DAY FORECAST CALL
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=41207263ce58dd4be4c4616de8affdff`)
    .then(response => response.json())
    .then(data => {

      document.querySelector('.forecast-cards').innerHTML = '';

      for (let i = 7; i < 40; i += 8) {


        const date = new Date(data.list[i].dt_txt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });
        const icon = data.list[i].weather[0].icon;
        const iconImageUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        const temp = data.list[i].main.temp;
        const windSpeed = data.list[i].wind.speed;
        const humidity = data.list[i].main.humidity;

        const card = document.createElement('div');
        card.classList.add('col-12', 'col-md-3', 'col-lg-2', 'p-2', 'm-2');
        card.innerHTML = `
          <div class="card">
            
              <h3 class="text-center text-primary">${date}</h3>
              <img src="${iconImageUrl}" alt="Weather Icon" style="width: 25%; height: 25%;">
              <li class="list-group-item">Temp: ${temp} °F</li>
              <li class="list-group-item">Wind Speed: ${windSpeed} m/s</li>
              <li class="list-group-item">Humidity: ${humidity}%</li>
            </ul>
          </div>
        `;

        document.querySelector('.forecast-cards').appendChild(card);
      }

      let cities = JSON.parse(localStorage.getItem('cities')) || [];
      const cityExists = cities.includes(city);

      if (!cityExists) {
        saveToLocalStorage(city);
        displaySearchHistory();
      }

      // CURRENT WEATHER

      let currentWeatherObject = data.city.coord
      let lat = currentWeatherObject.lat
      let lon = currentWeatherObject.lon
      console.log(lat + ' ' + lon);

      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=41207263ce58dd4be4c4616de8affdff`)
        .then(response => {
          return response.json()
        })
        .then(response => {
          console.log(response);
        })

      document.querySelector('.current-forecast-card').innerHTML = '';

      const currentIcon = data.list[0].weather[0].icon;
      const currentIconImageUrl = `https://openweathermap.org/img/wn/${currentIcon}@2x.png`;
      const currentTemp = data.list[0].main.temp;
      const currentWindSpeed = data.list[0].wind.speed;
      const currentHumidity = data.list[0].main.humidity;

      const currentCard = document.createElement('div');
      currentCard.classList.add('col-12', 'col-md-6', 'col=lg-10', 'p-2', 'm-2');
      currentCard.innerHTML = `
        <div class="jumbotron">
          
            <h3 class="text-center text-primary">Current Weather in ${city}</h3>
            <img src="${currentIconImageUrl}" alt="Weather Icon" style="width: 25%; height: 25%;">
            <li class="list-group-item">Temp: ${currentTemp} °F</li>
            <li class="list-group-item">Wind Speed: ${currentWindSpeed} m/s</li>
            <li class="list-group-item">Humidity: ${currentHumidity}%</li>
          </ul>
        </div>
      `;

      document.querySelector('.current-forecast-card').appendChild(currentCard);

    })
    .catch(error => console.error('Error fetching data:', error));
}


getForecastButtonEl.addEventListener('click', event => {
  event.preventDefault();
  const cityName = cityNameInput.value.trim();
  if (cityName !== '') {
    getWeatherForecast(cityName);
  } else {
    alert('Please enter a city name');
  }
});

displaySearchHistory();




