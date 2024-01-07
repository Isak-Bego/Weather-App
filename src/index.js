import "./style.css";

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
  let result = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${value}&days=7`,
    { mode: "cors" }
  );
  let data = await result.json();
  console.log(data);
}

//Holds the information about the forecast on the current location
let forecastInfo = new ForecastInfo();

getUserLocation().then((result) => {
  retrieveForecastInfo(result);
});
