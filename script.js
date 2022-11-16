/**
 * we will be using the openweather api
 * get weather data by location
 * get weather data by input
 * if weather data is stored in local storage, it should pull it up
 *
 *  <div id="place-text">
      <img src="" id="icon" width="100px" alt="weather icon"/>
      <p id="city"></p>
      <p id="country"></p>
      <p id="temp"></p>
      <p id="feels"> </p>
      <p id="latitude"></p>
      <p id="longitude"></p>
    </div>
 *  */

const getWeatherBtn = document.getElementById('get-weather-btn');
const icon = document.getElementById('icon');
const city = document.getElementById('city');
const country = document.getElementById('country');
const temperature = document.getElementById('temp');
const feels_Like = document.getElementById('feels');
const lat = document.getElementById('latitude');
const long = document.getElementById('longitude');
const inputLocation = document.querySelector('.input-location');

// a function that gets the coordinates
let latitude, longitude;
const api = 'use your api key from openweathermap';

getWeatherBtn.addEventListener('click', getWeatherByInput);

document.addEventListener('DOMContentLoaded', initialDisplay);

function initialWeather() {
  const successCallBack = (position) => {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        displayData(data);
      });

    // getWeatherByLocation(latitude, longitude);
  };

  const errorCallBack = (error) => {
    console.log(error);
  };

  navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);
}

// get weather from user input
async function getWeatherByInput(e) {
  e.preventDefault();

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputLocation.value}&appid=${api}&units=metric`
    );

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    const data = await response.json();

    localStorage.setItem('weather', JSON.stringify(data));
    displayData(data);
  } catch (error) {
    console.error(`${error}`);
  }
}

function initialDisplay() {
  let = retrieveData = JSON.parse(localStorage.getItem('weather'));

  if (retrieveData === null) {
    initialWeather();
  } else {
    // display from local storage
    displayData(retrieveData);
  }
}

//  display data

function displayData(details) {
  let icon_id = details.weather[0].icon;

  let url = `https://openweathermap.org/img/w/${icon_id}.png`;
  icon.src = url;

  city.innerText = `City: ${details.name}`;
  country.innerText = `Country: ${details.sys.country}`;
  temperature.innerText = `Temperature: ${details.main.temp}°C`;
  feels_Like.innerText = `Feels like: ${details.main.feels_like}°C`;
  lat.innerText = `Latitude: ${details.coord.lat}`;
  long.innerText = `Longitude: ${details.coord.lon}`;
}

// calling an api
// fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`)
//   .then((response) => response.json())
//   .then((data) => console.log(data))

// call api to get weather by location
// async function getWeatherByLocation(lat, lon) {
//   const response = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`
//   );

//   const data = await response.json();
//   console.log(data);
// }
