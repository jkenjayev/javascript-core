const api = {
  key: "8fe6beae9bf13c36ad55473083d7c489",
  baseurl: "https://api.openweathermap.org/data/2.5/",
};

const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("keyup", createQuery);

function createQuery(event) {
  if (event.keyCode === 13) {
    getResult(searchBox.value);
    console.log(searchBox.value);
  }
}

function getResult(query) {
  fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
}

function displayResult(weather) {
  console.log(weather);
  let city = document.querySelector(".location .city");
  city.innerHTML = `${weather.name}  ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector(".location .date");
  date.innerHTML = dateBuilder(now);

  let temp = document.querySelector(".temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>℃</span>`;

  let weatherInput = document.querySelector(".weather");
  weatherInput.innerHTML = `${weather.weather[0].main}`;

  let heightLowWeather = document.querySelector(".hi-low");
  heightLowWeather.innerHTML = `${Math.round(weather.main.temp_min)}℃ / ${Math.round(weather.main.temp_max)}℃`;
}

function dateBuilder(j) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December",
  ];

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[j.getDay()];
  let date = j.getDate();
  let month = months[j.getMonth()];
  let year = j.getFullYear();

  return `${day}, ${date}, ${month}, ${year}`;
}
