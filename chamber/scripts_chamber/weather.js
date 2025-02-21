 //visits
 const visitsDisplay = document.querySelector(".visits");
 let numVisits = Number(localStorage.getItem("numVisits-ls")) || 0;
 if (numVisits !== 0) {
   visitsDisplay.textContent = `👥 Visits: ${numVisits}`;
 } else {
   visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
 }
 numVisits++;
 
 localStorage.setItem("numVisits-ls", numVisits);
 
 // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key and 'CityName' with your desired city.
 const apiKey = "dfa721c75b5b837d03c449d285634652";
 const lat = "0.23560453108518586"; 
 const lon = "-78.26179541601464";  
 const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

 fetch(weatherURL)
   .then(response => response.json())
   .then(data => {

     const temp = data.main.temp;
     const desc = data.weather[0].description;
     const icon = data.weather[0].icon;

     document.getElementById("temp").textContent = `${temp}°C`;
     document.getElementById("desc").textContent = desc;
     document.getElementById("icon").src = `https://openweathermap.org/img/wn/${icon}.png`;
     document.getElementById("icon").alt = desc;
   })
   .catch(error => console.error("Error fetching weather data:", error));