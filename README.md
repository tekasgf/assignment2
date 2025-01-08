Weather and Movie App

Overview

This project is a web application that provides:

Weather Information - Displays detailed weather data, including temperature, humidity, wind speed, and location mapping using OpenWeather API.

Movie Recommendations - Shows popular movies and detailed information about specific films using TMDb and OMDb APIs.

Features

Weather App

Fetch weather data based on user input.

Display weather details including temperature, humidity, wind speed, and rain volume.

Map integration for geographic visualization using Leaflet.js.

Movie App

Fetch a list of popular movies.

Display movie details such as plot, actors, awards, and runtime.

Use TMDb and OMDb APIs for data retrieval.

Installation

Prerequisites

Node.js (v16 or later)

npm (Node Package Manager)

1. Clone the repository:
git clone <repository-url>

2. Navigate to the project directory:
cd weather-movie-app

3. Install dependencies:
npm install(express, axios)

4. Start the server:
npm start

5. Open the app in your browser:
http://localhost:3000

API Usage

Weather API Endpoint
GET /api/weather?city={city_name}

Parameters:

city: Name of the city (default: Astana)

Response:

{
  "temperature": 15.2,
  "description": "clear sky",
  "icon": "01d",
  "coordinates": {
    "lat": 51.1694,
    "lon": 71.4491
  },
  "feelsLike": 14.5,
  "humidity": 40,
  "pressure": 1012,
  "windSpeed": 3.5,
  "country": "KZ",
  "rain": 0
}

Movie API Endpoints

Popular Movies:
GET /movies/popular

Response:
[
  {
    "title": "Movie Title",
    "poster_path": "/path/to/image.jpg",
    "vote_average": 8.5
  }
]

Movie Details:
GET /movies/details/{title}

Response:
{
  "Title": "Movie Title",
  "Year": "2023",
  "Actors": "Actor 1, Actor 2",
  "Plot": "A brief description.",
  "Awards": "Best Movie",
  "Runtime": "120 min"
}

Key Design Decisions

Modular Architecture:

Divided the application into weather and movie modules for scalability and maintainability.

API Integration:

Used OpenWeather API for weather data and TMDb/OMDb APIs for movie data.

Axios is used for HTTP requests due to its ease of use and error handling.

Interactive UI:

Leaflet.js for interactive maps.

Clean and responsive design with CSS styling.

Error Handling:

Proper error handling and user-friendly messages in case of API failures.

Technologies Used

Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express.js

APIs: OpenWeather, TMDb, OMDb

Mapping: Leaflet.js

Future Enhancements

Add caching for API responses to reduce redundant requests.

Implement user authentication for personalized features.

Expand movie recommendations with filters and sorting.

Add additional weather insights such as forecasts.

Author

Name: Talgat

Group: 2306

License

This project is licensed under the MIT License.