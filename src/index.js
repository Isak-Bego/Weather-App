import "./style.css";
import { getDay } from "date-fns";
import { deleteComponents, renderComponents } from "./renderComponents";

//you can get it, it's for free
const API_KEY = "0cf899136a814fb3a74213616240401";

class ForecastInfo {
  constructor(location, current, forecast) {
    this.location = location;
    this.current = current;
    this.forecast = forecast;
  }

  setLocation(location) {
    this.location = location;
  }

  setCurrent(current) {
    this.current = current;
  }

  setForecast(forecast) {
    this.forecast = forecast;
  }
}

//Holds the information about the forecast on the current location
let forecastInfo = new ForecastInfo();

async function getUserLocation() {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const LATITUDE = position.coords.latitude;
          const LONGITUDE = position.coords.longitude;
          resolve(`${LATITUDE},${LONGITUDE}`);
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            console.log("User denied the premission to access location.");
          } else {
            console.log("Error getting geolocation:", error.message);
          }
          resolve("London");
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
      return resolve("London");
    }
  });
}

async function retrieveForecastInfo(value) {
  return new Promise((resolve, reject) => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${value}&days=14`,
      { mode: "cors" }
    )
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function setLocationData(locationData) {
  let location = {};
  location.name = locationData.name;
  location.country = locationData.country;
  forecastInfo.setLocation(location);
}

function setCurrentData(currentData, forecastData) {
  let current = {};
  current.condition = currentData.condition.text;
  current.condition_code = currentData.condition.code;
  current.temp_c = Math.round(currentData.temp_c);
  current.feelslike_c = Math.round(currentData.feelslike_c);
  current.humidity = currentData.humidity;
  current.precip_mm = currentData.precip_mm;
  current.pressure_mb = currentData.pressure_mb;
  current.uv = currentData.uv;
  current.wind_kph = currentData.wind_kph;
  current.sunrise = forecastData.forecastday[0].astro.sunrise;
  current.sunset = forecastData.forecastday[0].astro.sunset;
  current.maxtemp_c = Math.round(forecastData.forecastday[0].day.maxtemp_c);
  current.mintemp_c = Math.round(forecastData.forecastday[0].day.mintemp_c);
  current.hourly = [];
  forecastData.forecastday[0].hour.forEach((element) => {
    let hourInfo = {};
    hourInfo.time = element.time.split(" ")[1];
    hourInfo.precip_mm = element.precip_mm;
    hourInfo.condition = element.condition.text;
    hourInfo.condition_code = element.condition.code;
    hourInfo.temp_c = Math.round(element.temp_c);
    current.hourly.push(hourInfo);
    hourInfo = [];
  });
  forecastInfo.setCurrent(current);
}

function setDailyData(forecastData) {
  const WEEK_DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let forecast = [];
  let dayInfo = {};
  for (let i = 1; i < forecastData.forecastday.length; i++) {
    dayInfo.date = forecastData.forecastday[i].date;
    dayInfo.day = WEEK_DAYS[getDay(dayInfo.date)]; //getDay returns a number from 0 to 6 where 0 is Sunday
    dayInfo.condition = forecastData.forecastday[i].day.condition.text;
    dayInfo.condition_code = forecastData.forecastday[i].day.condition.code;
    dayInfo.totalprecip_mm = forecastData.forecastday[i].day.totalprecip_mm;
    dayInfo.avghumidity = forecastData.forecastday[i].day.avghumidity;
    dayInfo.mintemp_c = Math.round(forecastData.forecastday[i].day.mintemp_c);
    dayInfo.maxtemp_c = Math.round(forecastData.forecastday[i].day.maxtemp_c);
    forecast.push(dayInfo);
    dayInfo = {};
  }
  forecastInfo.setForecast(forecast);
}

function displayInfo(forecastInfo) {
  deleteComponents();
  renderComponents(forecastInfo);
}

function initializeForecastInfo(location) {
  retrieveForecastInfo(location)
    .then((data) => {
      if (!data.error) {
        setLocationData(data.location);
        setCurrentData(data.current, data.forecast);
        setDailyData(data.forecast);
        displayInfo(forecastInfo);
      } else {
        console.log(data.error.message);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

window.onload = () => {
  getUserLocation().then((result) => {
    initializeForecastInfo(result);
  });
};

let searchButton = document.querySelector(".searchButton");
let searchBox = document.querySelector(".searchBox");
searchButton.addEventListener("click", () => {
  let location = searchBox.value;
  searchBox.value = "";
  initializeForecastInfo(location);
});
