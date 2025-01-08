const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const OPENWEATHER_API_KEY = 'b2e798f9b50f5b3c06170125c3618b71';

//Route to fetch weather data
app.get('/api/weather', async (req, res) => {
    try {
        const city = req.query.city || 'Astana';
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${OPENWEATHER_API_KEY}`;

        const response = await axios.get(weatherUrl);
        const data = response.data;

        res.json({
            temperature: data.main.temp,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            coordinates: {
                lat: data.coord.lat,
                lon: data.coord.lon,
            },
            feelsLike: data.main.feels_like,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            windSpeed: data.wind.speed,
            country: data.sys.country,
            rain: data.rain ? data.rain['3h'] : 0,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Route to serve mapping page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//Movies route
const movieRouter = require('./routes/moviesRoutes');
app.use('/movies', movieRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});