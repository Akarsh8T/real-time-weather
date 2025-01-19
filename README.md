# Real-Time Weather App

A real-time weather application that fetches and displays weather information based on the user's location or a city name. The app uses APIs to get weather data and show the weather conditions, such as temperature, humidity, and wind speed.

## Features

- Real-time weather data
- Displays temperature, humidity, wind speed, and weather description
- Location-based weather by geolocation
- City-based weather search functionality
- Dynamic UI with weather icons and descriptions


## Tech Stack

- **HTML**: Structure of the app
- **CSS**: Styling and responsiveness
- **JavaScript**: Weather data fetching, handling user input, and dynamic UI updates
- **API**: OpenWeatherMap (for weather data), OpenCage (for geolocation)

## Setup Instructions

### Prerequisites

To run this project locally, you need:

- A web browser (Chrome, Firefox, etc.)
- An internet connection to fetch weather data from the APIs

### Steps to Run Locally

 1. **Clone the Repository**:
   First, clone the repository to your local machine.

   ```bash
   git clone https://github.com/Akarsh8T/real-time-weather.git
```
2.**Navigate to the Project Folder**: Change to the project directory where the 
    files are located.
```bash
cd real-time-weather
```
3.**Open the index.html File**: Open the index.html file in your browser. Simply double-click the file or use the browser's "Open File" option.

Alternatively, you can use a local server to host the project. If you have VS Code installed, you can use the Live Server extension.

4. **Start Using the App: Once the app is loaded, you can**:

Search for any city to view its weather.
Allow the app to detect your location and show weather based on your current position.

## API

This app uses two external APIs:

OpenWeatherMap API: For fetching weather data.
OpenCage Geocoding API: For reverse geocoding (getting location based on latitude and longitude).
To use the app, you need to sign up for API keys:

**OpenWeatherMap**: Sign up here and get your API key.

**OpenCage**: Sign up here and get your API key

After you have your keys, replace the "YOUR-API-KEY" placeholders in the JavaScript code.

## Contributing

If you'd like to contribute to the project:

Fork the repository

Create a new branch (git checkout -b feature-name)

Make your changes

Commit your changes (git commit -m 'Add some feature')

Push to the branch (git push origin feature-name)

Open a pull request

## LICENSE

This project is open-source and available under the MIT License.


