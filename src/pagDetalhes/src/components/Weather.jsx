const apiKey = "d16c38fc40ae4654ba001405232110";
const dateObj = new Date();

const getDayName = (dayType, dateVal = dateObj) =>
  dateVal.toLocaleDateString("pt-BR", { weekday: dayType });

// Retrieve weather data from the API and update the UI
function fetchWeatherData(location) {
  const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${encodeURIComponent(
    location
  )}&days=5`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      updateForecastData(data.forecast);
    })
    .catch((error) => {
      console.log("Error fetching weather data:", error);
    });
}

// function to update forecast data
function updateForecastData(forecastData) {
  const weekContainer = document.querySelector(".week-list");
  weekContainer.innerHTML = "";
  forecastData.forecastday.forEach((dayObj) => {
    const currentDate = new Date(dayObj.date + "T00:00:00");
    console.log(dayObj);
    console.log(currentDate);
    console.log(currentDate.toISOString());
    const liEl = document.createElement("li");
    liEl.innerHTML = `
      <img class="day-icon" src="https:${dayObj.day.condition.icon}" alt="${
      dayObj.day.condition.text
    }">
      <span class="day-name">${getDayName(
        "short",
        currentDate
      )}</span><span class="day-temp">${dayObj.day.maxtemp_c}°C</span>
    `;
    weekContainer.appendChild(liEl);
  });
  weekContainer.insertAdjacentHTML("beforeend", `<div class="clear"></div>`);
}

// On page load, fetch and display the current weather for the user's location
navigator.geolocation.getCurrentPosition(
  (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const location = "-23.412562165143914,-46.5556618210458";
    fetchWeatherData(location);
  },
  (error) => {
    console.log("Error getting location:", error);
  }
);
