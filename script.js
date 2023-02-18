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

let weather = {
  apiKey: "464e32adc6b9045a369e9406cb9a663f",
  fetchWeather: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`
    )
      .then((response) => {
        if (!response.ok) {
          weatherContainer.style.display = "none";
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },

  displayWeather: function (data) {
    weatherContainer.style.display = "block";
    loadingErrorElement.style.display = "none";
    cityName.textContent = `Weather in ${data.name}`;

    weatherTemp.textContent = `${Math.round(data.main.temp)}℃`;

    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    description.textContent = `${data.weather[0].description}`;

    humidityElement.textContent = `Humidity: ${Number.parseFloat(
      data.main.humidity
    ).toFixed(2)} %`;

    windSpeed.textContent = `Wind speed: ${Number.parseFloat(
      data.wind.speed
    ).toFixed(2)} km/h`;
  },

  search: function () {
    this.fetchWeather(searchBar.value);
  },
};

searchBar.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    weather.search();
  }
});

buttonCity.addEventListener("click", function () {
  buttonCity.disabled = true;
  weather.search();
  buttonCity.disabled = false;
});

weather.fetchWeather("tbilisi");
