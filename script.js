function getWeather() {
  const city = document.getElementById("cityInput").value;
  console.log("City:", city);

  const apiKey = "39084ebe7e806a2dc3f7a515d0289799"; // ← Your real API key

  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      const weatherHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon" />
        <p><strong>${data.weather[0].main}</strong></p>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind: ${data.wind.speed} m/s</p>
      `;
      document.getElementById("weatherInfo").innerHTML = weatherHTML;
    })
    .catch((error) => {
      document.getElementById("weatherInfo").innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
}
