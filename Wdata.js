const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "0f347295535314e98eefa5630236f948";
let srchBar = document.querySelector("input");
let srchBtn = document.querySelector("button");
let icon = document.querySelector(".weather-icon");

async function check(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "hide";

    if (data.weather[0].main == "Clouds") {
      icon.src = "cloudy.png";
    } else if (data.weather[0].main == "Clear") {
      icon.src = "sun.png";
    } else if (data.weather[0].main == "Rain") {
      icon.src = "storm(1).png";
    } else if (data.weather[0].main == "Storm") {
      icon.src = "storm(1).png";
    } else if (data.weather[0].main == "Snow") {
      icon.src = "snow.png";
    } else if (data.weather[0].main == "Drizzle") {
      icon.src = "rain.png";
    } else if (data.weather[0].main == "Mist") {
      icon.src = "mist.png";
    }
  }
}

srchBtn.addEventListener("click", () => {
  check(srchBar.value);
});
