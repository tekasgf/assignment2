let map;

async function fetchWeather(city = 'Astana') {
    const weatherInfo = document.getElementById('weather-info');
    const mapSection = document.getElementById('map');

    try {
        const response = await fetch(`/api/weather?city=${city}`);
        if (!response.ok) throw new Error('Failed to fetch weather data');

        const data = await response.json();

        document.getElementById('temperature').textContent = `Temperature: ${data.temperature}°C`;
        document.getElementById('description').textContent = `Description: ${data.description}`;
        document.getElementById('icon').src = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;
        document.getElementById('coordinates').textContent = `Coordinates: Latitude ${data.coordinates.lat}, Longitude ${data.coordinates.lon}`;
        document.getElementById('feels-like').textContent = `Feels Like: ${data.feelsLike}°C`;
        document.getElementById('humidity').textContent = `Humidity: ${data.humidity}%`;
        document.getElementById('pressure').textContent = `Pressure: ${data.pressure} hPa`;
        document.getElementById('wind-speed').textContent = `Wind Speed: ${data.windSpeed} m/s`;
        document.getElementById('country').textContent = `Country: ${data.country}`;
        document.getElementById('rain').textContent = `Rain Volume (Last 3 Hours): ${data.rain} mm`;

        if (map) {
            map.setView([data.coordinates.lat, data.coordinates.lon], 10);
            L.marker([data.coordinates.lat, data.coordinates.lon]).addTo(map)
                .bindPopup(`${city}`).openPopup();
        } else {
            map = L.map(mapSection).setView([data.coordinates.lat, data.coordinates.lon], 10);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
            }).addTo(map);

            L.marker([data.coordinates.lat, data.coordinates.lon]).addTo(map)
                .bindPopup(`${city}`).openPopup();
        }
    } catch (error) {
        weatherInfo.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

document.getElementById('weather-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const city = document.getElementById('city-input').value;
    fetchWeather(city);
});

window.addEventListener('load', function () {
    fetchWeather(); 
});

