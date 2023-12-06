# Server-Side APIs Challenge: Weather Dashboard

This weather dashboard project demonstrates the usage of third-party APIs to access and display weather data for various cities. The application runs in the browser and dynamically updates HTML and CSS components.


## Application of Third-Party APIs

The project demonstrates the practical use of third-party APIs, specifically the 5 Day Weather Forecast API provided by OpenWeatherMap. The integration of this API allowed the retrieval of real-time weather data, aiding the project's capability to use third party APIs effectively.

## Weather Forecast API

The application uses the 5 Day Weather Forecast API to retrieve weather data for cities. The base URLs for the API request are the following:

https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_key}

https://api.openweathermap.org/data/2.5/forecast?q={city}&units=imperial&appid={API_key}

## JavaScript Functionality

The JavaScript code is responsible for handling user interactions, fetching data from the API, adding the history to local storage, and dynamically updating the dashboard elements.

## User Interaction:

### City Input and Weather Retrieval:
    - Enables users to input a city name to retrieve the current weather for that city.
    - User also can retrieve a basic five-day weather forecast.
    - Facilitates the storage of searched cities locally for swift and convenient access in subsequent sessions.

## Display Functions:

### saveToLocalStorage(city):
    - Functionality to store searched cities in local storage, shows a record of previous searches.

### displaySearchHistory():
    - Generates interactive buttons representing previously searched cities. These buttons allow for the process of easily re-accessing weather forecasts for those cities.

### getWeatherForecast(city):
    - Initiates the retrieval of weather data for the specified city from the API and dynamically updates the forecast cards on the dashboard.


## Styling

The primary styling for this project was achieved with the Bootstrap API with additional styling done with CSS.

## Deployed Site

https://p-iacone88.github.io/Weather-API/

## Screenshots

![Screenshot 2023-12-06 at 4 05 42 PM](https://github.com/p-iacone88/Weather-API/assets/50248763/b9ce4c75-7614-4d4a-a928-c12930ae7057)

![Screenshot 2023-12-06 at 4 05 50 PM](https://github.com/p-iacone88/Weather-API/assets/50248763/f7e57794-6b43-4f07-8fe6-38967b17b2ff)




## Credits
This project was completed as part of the Penn LPS Full Stack Flex Coding Boot Camp, and tutoring was provided by Dru Sanchez.
