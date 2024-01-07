import cloudy from "./assets/cloudy.png";
import foggy from "./assets/foggy.png";
import partlyCloudy from "./assets/partly-cloudy.png";
import rainy from "./assets/rainy.png";
import snowy from "./assets/snowy.png";
import sunny from "./assets/sunny.png";
import thunderstorm from "./assets/thunderstorm.png";
import sunset from "./assets/sunset.png";
import sunrise from "./assets/sunrise.png";
import uv from "./assets/UV.png";
import wind from "./assets/wind-vane.png";
import humidity from "./assets/humidity.png";
import precipitation from "./assets/precipitation.png";
import pressure from "./assets/pressure.jpg";

export function renderComponents(forecastInfo) {
  renderCurrentData(forecastInfo);
  renderHourlyData(forecastInfo);
  renderDailyData(forecastInfo);
}

function getConditionImage(conditionCode) {
  if (
    conditionCode == 1114 ||
    conditionCode == 1117 ||
    (conditionCode >= 1204 && conditionCode <= 1225) ||
    conditionCode == 1237 ||
    conditionCode == 1279 ||
    conditionCode == 1282
  ) {
    return snowy;
  } else if (
    conditionCode == 1150 ||
    conditionCode == 1153 ||
    conditionCode == 1168 ||
    conditionCode == 1171 ||
    (conditionCode >= 1180 && conditionCode <= 1201) ||
    (conditionCode >= 1240 && conditionCode <= 1255) ||
    (conditionCode >= 1261 && conditionCode <= 1264) ||
    (conditionCode >= 1273 && conditionCode <= 1276)
  ) {
    return rainy;
  } else if (
    conditionCode == 1009 ||
    conditionCode == 1135 ||
    conditionCode == 1147
  ) {
    return foggy;
  } else if (
    (conditionCode >= 1006 && conditionCode <= 1009) ||
    (conditionCode >= 1063 && conditionCode <= 1072)
  ) {
    return cloudy;
  } else if (conditionCode == 1003) {
    return partlyCloudy;
  } else if (conditionCode == 1000) {
    return sunny;
  } else if (conditionCode == 1087) {
    return thunderstorm;
  }
}

export function renderCurrentData(forecastInfo) {
  let conSrc = getConditionImage(forecastInfo.current.condition_code);
  document.body.innerHTML += `<div class="currentWeatherSection">
    <div class="currentWeatherTicket">
        <h3>${forecastInfo.location.name}</h3>
        <h6>${forecastInfo.current.condition}</h6>
        </br>
        <div class="conditionImageContainer">
            <img src="${conSrc}" alt="${forecastInfo.current.condition}">
        </div>
        </br>
        <h1>${forecastInfo.current.temp_c}&deg;C</h1>
        <h6>Feels like ${forecastInfo.current.feelslike_c}&deg;C</h6>
        </br>
        </br>
        <div class="maxMin">
            <div class="min">L: ${forecastInfo.current.mintemp_c}&deg;C</div>
            <div class="max">H: ${forecastInfo.current.maxtemp_c}&deg;C</div>
        </div>
    </div>
    <div class="currentWeatherDetails">
        <div>
          <img src="${humidity}" alt="Humidity">
          <p>Humidity: ${forecastInfo.current.humidity}%</p>
        </div>
        <div>
          <img src="${precipitation}" alt="Precipitation">
          <p>Precipitation: ${forecastInfo.current.precip_mm} mm</p>
        </div>
        <div>
          <img src="${pressure}" alt="Pressure">
          <p>Pressure: ${forecastInfo.current.pressure_mb} mb</p>
        </div>
        <div>
          <img src="${uv}" alt="UV">
          <p>UV: ${forecastInfo.current.uv}</p>
        </div>
        <div>
          <img src="${wind}" alt="Wind Speed">
          <p>Wind speed: ${forecastInfo.current.wind_kph} km/h</p>
        </div>
        <div>
          <img src="${sunrise}" alt="Sunrise">
          <p>Sunrise: ${forecastInfo.current.sunrise}</p>
        </div>
        <div>
          <img src="${sunset}" alt="Sunset">
          <p>Sunset: ${forecastInfo.current.sunset}</p>
        </div>
    </div>
</div>`;
}

export function renderHourlyData(forecastInfo) {
  let hourlyWeatherSection = document.createElement("div");
  hourlyWeatherSection.className = "hourlyWeatherSection";
  document.body.appendChild(hourlyWeatherSection);
  forecastInfo.current.hourly.forEach((element) => {
    let conSrc = getConditionImage(element.condition_code);
    hourlyWeatherSection.innerHTML += `<div class="hourWeatherHolder">
      <h3>${element.time}</h3>
      <div class="timeConditionImageHolder">
        <img src="${conSrc}" alt="${element.condition}">
      </div>
      <h1>${element.temp_c}&deg;C</h1>
    </div>
    `;
  });
}

export function renderDailyData(forecastInfo) {
  
}
