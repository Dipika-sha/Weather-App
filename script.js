const cityInput = document.getElementById("cityInput");
const searchbtn = document.getElementById("searchbtn");
const weatherRessult = document.getElementById("weatherResult");

searchbtn.addEventListener("click", async function () {
  try {
    const city = cityInput.value;

    if (city === "") {
      alert("Please enter a city name.");
      return;
    }
    //api call
    const response = await fetch(`https://wttr.in/${city}?format=j1`);
    const data = await response.json();

    console.log(data);

    const temp = data.current_condition[0].temp_C;
    const humidity = data.current_condition[0].humidity;
    const condition = data.current_condition[0].weatherDesc[0].value;
    

     const days = [
            "☀️Sunday",
            "💼Monday",
            "🚀Tuesday",
            "📚Wednesday",
            "⚡Thursday",
            "🎉Friday",
            "🏖️Saturday"
        ];

        const today = new Date();
        const dayName = days[today.getDay()];




    weatherRessult.innerHTML = `
    <h2>${city}</h2>
    <p>📅 Day:${dayName}</p>
    <p>🌡️ Temperature: ${temp}°C</p>
    <p>☁️ Condition: ${condition}</p>
    <p>💧 Humidity:${humidity}%</p>`;
  } catch (error) {
    weatherRessult.innerHTML = "<p>Something went wrong. Please try again.</p>";

    console.log(error);
  }
});
