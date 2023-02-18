"use strict";

const buttonCity = document.getElementById("button-city");
const searchBar = document.querySelector(".search-bar");
const windSpeed = document.querySelector("wind");

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
  console.log(58);
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  // windSpeed.value = Number(data.wind.speed);
  console.log(data);
  console.log(Number(data.wind.speed));
}
