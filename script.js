"use strict";

const buttonCity = document.getElementById("button-city");
const searchBar = document.querySelector(".search-bar");
const windSpeed = document.querySelector(".wind");
const humidityElement = document.querySelector(".humidity");
const description = document.querySelector(".description");
const weatherIcon = document.querySelector(".weather-icon");
const weatherTemp = document.querySelector(".temp");
const cityName = document.querySelector(".city-name");
const weatherContainer = document.querySelector(".weather-container");
const loadingErrorElement = document.querySelector(".loading-error");

const apiKey = "464e32adc6b9045a369e9406cb9a663f";

searchBar.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    getWeather(e.target.value);
  }
});

buttonCity.addEventListener("click", function () {
  getWeather(searchBar.value);
});

async function getWeather(city) {
  try {
    buttonCity.disabled = true;
    loadingErrorElement.textContent = "Loading...";

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

    if (data) {
      console.log("dv");
      //city name
      cityName.textContent = `Weather in ${data.name}`;

      // weather temp
      weatherTemp.textContent = `${Math.round(data.main.temp)}℃`;

      // Icon
      weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

      // Description
      description.textContent = `${data.weather[0].description}`;

      // Humidity
      humidityElement.textContent = `Humidity: ${Number.parseFloat(
        data.main.humidity
      ).toFixed(2)} %`;

      // Wind Speed
      windSpeed.textContent = `Wind speed: ${Number.parseFloat(
        data.wind.speed
      ).toFixed(2)} km/h`;

      weatherContainer.style.display = "block";
      loadingErrorElement.style.display = "none";
    }
  } catch (error) {
    console.log("error");
    loadingErrorElement.textContent = "Something went wrong";
  }
}
