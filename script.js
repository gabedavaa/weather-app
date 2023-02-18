"use strict";

const buttonCity = document.getElementById("button-city");
const searchBar = document.querySelector("search-bar");

const apiKey = "464e32adc6b9045a369e9406cb9a663f";

buttonCity.addEventListener("click", function () {
  console.log(searchBar.textContent);
  console.log("helloo");
  const url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;
});
