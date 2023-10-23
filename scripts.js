// API Key for Weather

const apiKey = "c9bf8ac14b0b104a8fe5da4145948ce8";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

  console.log(data);
  
  if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "Lottie/clouds.gif";
  } else if (data.weather[0].main === "Clear") {
    weatherIcon.src = "Lottie/clear.gif";
  } else if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "Lottie/drizzle.gif";
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "Lottie/rain.gif";
  } else if (data.weather[0].main === "Mist") {
    weatherIcon.src = "Lottie/mist.gif";
  } else {
    console.log("ERROR: Can't find weather icon");
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
} )
